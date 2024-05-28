const testimonials = [
    {
      name: "Alice Johnson",
      job: "Software Engineer",
      description: "Hotelify made my business trip a breeze. The booking process was seamless, and the hotel they recommended was perfect. The amenities were exactly as described, and I couldn't be happier with my stay.",
      image: "./images/logo.png"
    },
    {
      name: "Bob Smith",
      job: "Graphic Designer",
      description: "I had an outstanding experience with Hotelify. The platform is user-friendly and provided me with great hotel options. The hotel was beautiful, with excellent service and a fantastic location.",
      image: "https://example.com/images/bob.jpg"
    },
    {
      name: "Catherine Green",
      job: "Marketing Manager",
      description: "Hotelify exceeded my expectations. The selection of hotels was impressive, and the booking process was straightforward. The hotel was exactly as advertised, and I enjoyed every moment of my stay.",
      image: "https://example.com/images/catherine.jpg"
    },
    {
      name: "David Brown",
      job: "Project Manager",
      description: "Using Hotelify was a great decision. The platform helped me find a perfect hotel for my family vacation. The place was comfortable, clean, and had excellent service. We'll definitely use Hotelify again.",
      image: "https://example.com/images/david.jpg"
    },
    {
      name: "Emily White",
      job: "Consultant",
      description: "Hotelify is a game-changer for travel planning. The interface is easy to navigate, and I found a fantastic hotel in no time. The stay was delightful, with all the amenities I needed for a comfortable trip.",
      image: "https://example.com/images/emily.jpg"
    },
    {
      name: "Frank Miller",
      job: "Entrepreneur",
      description: "Hotelify provided an excellent hotel booking experience. The recommendations were spot-on, and the hotel I chose was perfect. The staff was friendly, and the facilities were top-notch. Highly recommend!",
      image: "https://example.com/images/frank.jpg"
    }
  ];
  
  const testimonialsDiv = document.querySelector("#testimonials");
  
  testimonials.forEach((testimonial) => {
      const card = document.createElement('div');
      card.classList.add('testimonial-card'); // Optionally, add a class to style the card
  
      const image = document.createElement('img');
      image.src = testimonial.image;
  
      const name = document.createElement('h2');
      name.textContent = testimonial.name;
  
      const job = document.createElement('p');
      job.textContent = testimonial.job;

      const line = document.createElement('hr');

  
      const description = document.createElement('p');
      description.textContent = testimonial.description;
  
      card.appendChild(image);
      card.appendChild(name);
      card.appendChild(job);
      card.appendChild(line);

      card.appendChild(description);
  
      testimonialsDiv.appendChild(card);
  });
  
  const name = "jeylan is my name and i am not feel shame about it again"
  