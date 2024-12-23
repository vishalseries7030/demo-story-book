function loadNextPage() {
    const pageContent = document.getElementById("page-content");
    pageContent.innerHTML = `        
      <div class="content1">
        <div class="right-section">
          <h2>Contact Information</h2>
          <p>
            We value your feedback and inquiries. If you have any questions or
            need further information about our services, please do not hesitate to
            reach out. You can contact us via email at support@yourwebsite.com or
            call us at +123 456 7890. Additionally, follow us on our social media
            platforms for updates and announcements. We are committed to providing
            excellent support and look forward to assisting you with any queries
            you may have. Our team is dedicated to ensuring you have the best
            experience possible with our services.
          </p>
          <p>
            Please feel free to share your suggestions, and we will make every effort
            to accommodate your needs. Stay connected with us for more updates and
            exciting offers in the future. Your satisfaction is our priority, and we
            aim to build a lasting relationship with our clients. Our support team
            works round the clock to ensure that your experience is smooth and enjoyable.
            We believe in fostering long-term partnerships by offering personalized
            assistance. You can rely on us for prompt responses and top-notch services
            that meet your expectations.
          </p>
        </div>
      </div>
    `;
    document.body.style.background =
      'url("https://static.vecteezy.com/system/resources/previews/018/752/863/non_2x/abstract-background-design-background-texture-design-with-abstract-style-creative-illustration-for-advertising-posters-business-cards-flyers-websites-banners-covers-landings-pages-etc-vector.jpg") no-repeat center center/cover';
  }

  function loadPreviousPage() {
    const pageContent = document.getElementById("page-content");
    pageContent.innerHTML = `
      <div class="content">
        <div class="left-section">
          <h2>Book Title</h2>
          <p>Author: John Doe</p>
          <p>
            Description: This book provides a deep insight into the world of
            abstract concepts and creative ideas. Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Corporis voluptate porro consequuntur
            velit cupiditate? Deleniti distinctio voluptate ullam saepe numquam
            corporis esse vel atque quaerat aliquid. Doloribus, at recusandae?
            Quisquam. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quasi, praesentium? Est nulla, in natus sed molestiae unde hic
            deleniti harum repellendus distinctio ullam earum. Voluptas
            necessitatibus, odit provident eius quaerat ducimus quo, delectus,
            dolores reprehenderit possimus quam? Eveniet exercitationem illo
            esse velit nihil praesentium libero, similique eos at inventore. Est
            tempora numquam error quibusdam sint dicta, minima quia sequi eum,
            quaerat incidunt ipsum esse quasi, placeat omnis. Molestias
            voluptatem excepturi quis, sint nemo unde nostrum nesciunt in,
            labore explicabo pariatur, id maxime minus ipsa. Vitae magni illum
            placeat beatae officia voluptas repellat illo quia repudiandae
            delectus? Eaque blanditiis praesentium quis consequatur fugiat enim
            minus repellat sequi provident asperiores voluptates, ipsa
            voluptatibus consectetur. Quod provident maiores quis facilis, porro
            tempora expedita.
          </p>
        </div>
      </div>
    `;
    document.body.style.background =
      'url("https://static.vecteezy.com/system/resources/previews/027/544/940/non_2x/background-with-blue-abstract-multilayered-wavy-pattern-paper-art-style-template-design-for-posters-banners-flyers-booklets-vector.jpg") no-repeat center center/cover';
  }