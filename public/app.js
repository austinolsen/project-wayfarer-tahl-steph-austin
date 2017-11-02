$(document).ready(function() {
  console.log("app js is loaded!");
  userDb = [
    {
      username: "sammy",
      token: "123456",
      avatar: 1,
      firstName: "Sam",
      lastName: "Spade",
      location: "Casa Blanca"
    }, {
      username: "minny",
      token: "abcdef",
      avatar: 2,
      firstName: "Minnie",
      lastName: "Mouse",
      location: "Disneyland, CA"
    }, {
      username: "freddie",
      token: "12ab34",
      avatar: 3,
      firstName: "Freddie",
      lastName: "Kruger",
      location: "Your Dreams, MN"
    }
  ];
  console.log(userDb);
  commentsDb = [
    {
      postRef: "12",
      userRef: "sammy",
      comment: "very interesting article.  I would recommend you have a cigar.",
      date: "1954-06-12"
    }, {
      postRef: "24",
      userRef: "minny",
      comment: "hehe, it's great",
      date: "1934-01-12"
    }, {
      postRef: "19",
      userRef: "freddie",
      comment: "I'm coming to get you",
      date: "1979-05-15"
    }
  ];
  postDb = [
    {
      postRef: "12",
      location: "Vancouver",
      title: "This is why you should visit Vancouver BC",
      comment: "Vancouver BC is not just a winter wonderland, so forth"
    }, {
      postRef: "24",
      location: "London",
      title: "Make London your next stop",
      comment: "London is a great place to scare people in their dreams"
    }, {
      postRef: "19",
      location: "San Francisco",
      title: "San Francisco is a great place for shaking it",
      comment: "Since the first time I visit San Francisco until today..."
    }
  ];

  citiesArray = [
    {
    name: "San Francisco",
    img: "img/San Francisco.jpg",
    description: "SF description"
  }, {
    name: "New York",
    img: "img/New York.jpeg",
    description: "New York description"
  }, {
    name: "Vancouver",
    img: "img/Vancouver.jpg",
    description: "Vancouver description"
  }
];

  avatarDb = [
    'f-flower-1.jpg', 'f-flower-2.jpg', 'f-iris-1.jpg',
    'f-lily-1.jpg', 'f-rose-1.jpg', 'f-rose-2'
  ]

  $('#profile-avatar').attr('src','img/'+avatarDb[2]);
  $('#profile-name').html(userDb[0].firstName + ' ' + userDb[0].lastName);
  $('#profile-city').html(userDb[0].location);
  for(var j=0; j<postDb.length; j++) {
    $('.postSummary').append(`<p>Title: ${postDb[j].title}</p><p>Comment: ${postDb[j].comment}</p><br/>`)
  }


  // Initialize Tooltip
  $('[data-toggle="tooltip"]').tooltip();

  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, footer a[href='#myPage']").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {

      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function() {

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
})
