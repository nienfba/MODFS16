import { Controller } from '@hotwired/stimulus';

/*
 * This is an example Stimulus controller!
 *
 * Any element with a data-controller="hello" attribute will cause
 * this controller to be executed. The name "hello" comes from the filename:
 * hello_controller.js -> "hello"
 *
 * Delete this file or adapt it for your use!
 */
export default class extends Controller {

    add(e) {
        const target = e.currentTarget;
        target.classList.toggle('btn-light');
        target.classList.toggle('btn-success');

        const url = target.dataset.url;
        fetch(url)
        .then(response=>response.json())
        .then(data=>{
            const toast = document.createElement('div');
            toast.innerHTML = `<div class="position-fixed bottom-0 end-0 p-3" style="z-index: 11">
                <div id="liveToast" class="toast hide" role="alert" aria-live="assertive" aria-atomic="true">
                    <div class="toast-header">
                    <img src="..." class="rounded me-2" alt="...">
                    <strong class="me-auto">Bootstrap</strong>
                    <small>Maintenant</small>
                    <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                    </div>
                    <div class="toast-body">
                    ${data.message}
                    </div>
                </div>
                </div>`
            document.body.appendChild(toast)

        })
    }
}
