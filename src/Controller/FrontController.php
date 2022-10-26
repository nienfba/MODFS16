<?php

namespace App\Controller;

use App\Entity\Article;
use App\Repository\ArticleRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class FrontController extends AbstractController
{
    #[Route('/', name: 'app_front')]
    public function index(ArticleRepository $articleRepository, SessionInterface $session): Response
    {
        return $this->render('front/index.html.twig', [
            'articles'=>$articleRepository->findAll(),
            'favorites'=> $session->get('favorites',[])
        ]);
    }

    #[Route('/favorite/{id}', name: 'add_favorite')]
    public function favorite(Article $article=null, SessionInterface $session): JsonResponse
    {

        if($article == null)
            return $this->json(['message'=>'Ajout impossible, article introuvable'], 404);

        $articlesFavorites = $session->get('favorites', []);
        $id = $article->getId();
        if(!in_array($id,$articlesFavorites))
            $articlesFavorites[] = $id;
        else
            array_splice($articlesFavorites,array_search($id, $articlesFavorites),1);
        
        $session->set('favorites', $articlesFavorites);

        return $this->json(['message' => 'Article ajouté aux favoris'], 200);

    }

   
    #[Route('/json', name: 'app_json')]
    public function allArticles(ArticleRepository $articleRepository): JsonResponse
    {
        return $this->json($articleRepository->findAll());
    }
}
