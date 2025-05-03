<template>
    <div class="mt-4">
        <div class="accordion" id="productAccordion">
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                        Shipping Information
                    </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne"
                    data-bs-parent="#productAccordion">
                    <div class="accordion-body">
                        <p>Free shipping on orders over $50. Standard delivery 3-5 business days.
                        </p>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Returns & Exchanges
                    </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
                    data-bs-parent="#productAccordion">
                    <div class="accordion-body">
                        <p>Easy returns within 30 days of purchase. See our return policy for more
                            details.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>