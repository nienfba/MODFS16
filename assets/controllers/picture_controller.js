import { Controller } from '@hotwired/stimulus';

/*
 * Pictures collection on Article : add / remove picture
 */
export default class extends Controller {
    static targets = ['prototype','pictures']

    add() {
        let newImage = document.createElement('div');
        newImage.innerHTML = this.prototypeTarget.dataset.prototype.replace(/__name__/g, this.count);
        this.picturesTarget.appendChild(newImage);
        this.count++;
    }

    get count() {
        return this.data.get("count")
    }

    set count(value) {
        this.data.set("count", value)
    }


}


/*
document.addEventListener('click',clickAdd);


function clickAdd(){
    const zoneDomPicture = ;
    const prototype = document.querySelector('prototype').dataset.prototype;
    const count = this.dataset.count;

    const element = document.createElement('div');
    element.innerHTML = prototype.replace(/__name__/g, count);
    zoneDomPicture.appendChild(element);

}*/
