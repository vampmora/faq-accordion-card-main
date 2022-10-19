const faqs = document.querySelectorAll('.faq');


faqs.forEach((ques)=>{
    ques.addEventListener('click',()=>{
        ques.classList.toggle('active');
    });
});

