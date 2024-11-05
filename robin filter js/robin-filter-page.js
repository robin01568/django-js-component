// product filter and load more start
document.addEventListener("DOMContentLoaded", function() {
    function loadProductsSlicing(){
        const products = document.querySelectorAll('.load-product');
        let productsArray = Array.from(products).slice(0, 15);
        productsArray.forEach(product => product.style.display = 'block');

        const loadMoreBtn = document.querySelector('.loadMore');
        loadMoreBtn.addEventListener('click', function(e) {
            e.preventDefault();
            const hiddenProducts = Array.from(products).filter(product => product.style.display === 'none');
            hiddenProducts.slice(0, 2).forEach(product => {
                product.style.display = 'block';
            });
            if (hiddenProducts.length <= 2) {
                loadMoreBtn.textContent = 'No Content';
                loadMoreBtn.classList.add('noContent');
            }
        });
    }

    document.querySelectorAll('.js-get-request').forEach(btn => {
        let id = btn.getAttribute('data-ids');
        let key = btn.getAttribute('data-key');
        let result_show_id = 'js-show-product';
        btn.addEventListener('click', function() {
            document.querySelectorAll('.js-get-request').forEach(button => {
                button.style.color = '#595c59';
            });
            btn.style.color = '#ED2224';
            let data = {
                url: '',
                datas: {
                    [key]: id,
                },
                success: {
                    "id": result_show_id,
                }
            };
            robinGET(data).then(() => {
                loadProductsSlicing();
            });
        });
    });
    
    loadProductsSlicing();
// product filter and load more end

// mobile screen offcanvus start
    const offCanvas = document.querySelector('.js-offcanvus-result');
    const toggleButton = document.querySelector('.js-offcanvus');
    toggleButton.addEventListener("click", function() {
        offCanvas.classList.toggle('active');
    });
    document.addEventListener("click", function(event) {
        if (!offCanvas.contains(event.target) && !toggleButton.contains(event.target)) {
            offCanvas.classList.remove('active');
        }
    });
});
// mobile screen offcanvus end