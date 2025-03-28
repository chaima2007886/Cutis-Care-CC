document.addEventListener('DOMContentLoaded', function() {
    const dateElements = document.querySelectorAll('#current-date');
    if (dateElements.length > 0) {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const currentDate = new Date().toLocaleDateString('en-US', options);
        dateElements.forEach(element => {
            element.textContent = currentDate;
        });
    }

    const currentPage = location.pathname.split('/').pop();
    document.querySelectorAll('nav a').forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });

    function startQuiz() {
        const skinType = prompt(`How does your skin feel a few hours after washing your face? Please Select a Number!\n
1. Tight, dry, or flaky
2. Shiny all over (forehead, nose, cheeks)
3. Shiny only in T-zone (forehead/nose)
4. Comfortable, not too oily or dry
5. Red, irritated, or sensitive`);
        
        const results = [
            { type: "Dry Skin", rec: "Use creamy cleansers and rich moisturizers with hyaluronic acid." },
            { type: "Oily Skin", rec: "Try gel-based cleansers and oil-free, non-comedogenic moisturizers." },
            { type: "Combination Skin", rec: "Use gentle cleansers and apply lighter moisturizer on T-zone, richer on cheeks." },
            { type: "Normal Skin", rec: "Maintain with balanced cleansers and moderate hydration as needed." },
            { type: "Sensitive Skin", rec: "Look for fragrance-free products with soothing ingredients like aloe or oatmeal." }
        ];
        
        if (skinType && skinType >= 1 && skinType <= 5) {
            const result = results[skinType-1];
            alert(`Your Skin Type: ${result.type}\n\nRecommendation: ${result.rec}`);
        } else {
            alert("Please select a number between 1-5 to get your skin type recommendation.");
        }
    }

    const quizBtn = document.querySelector('.quiz button');
    if (quizBtn) {
        quizBtn.addEventListener('click', startQuiz);
    }
});