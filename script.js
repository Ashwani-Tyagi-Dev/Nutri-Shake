const heading=document.getElementById("heading");
const i2=document.getElementById("i2");
const i3=document.getElementById("i3");
const i4=document.getElementById("i4");
const i5=document.getElementById("i5");
const i6=document.getElementById("i6");
const i7=document.getElementById("i7");
const i8=document.getElementById("i8");
const i9=document.getElementById("i9");
const i10=document.getElementById("i10");


function hide(){
heading.classList.remove("hide");
i2.classList.remove("hide");
i3.classList.remove("hide");
i4.classList.remove("hide");
i5.classList.remove("hide");
i6.classList.remove("hide");
i7.classList.remove("hide");
i8.classList.remove("hide");
i9.classList.remove("hide");
i10.classList.remove("hide");


}
setTimeout(() => {
    hide();
}, 100);


setTimeout(() => {
  

    heading.classList.remove("transi");
i2.classList.remove("transi");
i3.classList.remove("transi");
i4.classList.remove("transi");
i5.classList.remove("transi");
i6.classList.remove("transi");
i7.classList.remove("transi");
i8.classList.remove("transi");
i9.classList.remove("transi");
i10.classList.remove("transi");


}, 700);





gsap.registerPlugin(ScrollTrigger);

// GSAP animation to control the image based on scroll


// gsap for responsiveness
// create
let mm = gsap.matchMedia();

// add a media query. When it matches, the associated function will run
mm.add("(min-width: 801px)", () => {

  // this setup code only runs when viewport is at least 800px wide

  gsap.to("#i5", {
    x: "-29.282576866764277vw",               // Move image 500px to the right
    y: "117.6470588235294vh",               // Move image 200px down
    scale: 1.5,           // Scale the image to 1.5x
    rotate: 360,          // Rotate the image 360 degrees
    scrollTrigger: {
        trigger: ".container1", // Trigger the animation when this container is in view
        start: "top top",            // Start when the top of the container hits the top of the viewport
        end: "bottom top",           // End when the bottom of the container reaches the top of the viewport
        scrub: true,                 // Smooth scrubbing based on scroll position
        // markers: true                // Show markers for debugging (you can remove this later)
    }
    
});
gsap.to("#i4", {
    x: "-29.282576866764277vw",               // Move image 500px to the right
    y: "161.76470588235293vh",               // Move image 200px down
    scale: 1.2,           // Scale the image to 1.5x
    rotate: 270,          // Rotate the image 360 degrees
    scrollTrigger: {
        trigger: ".container1", // Trigger the animation when this container is in view
        start: "top top",            // Start when the top of the container hits the top of the viewport
        end: "bottom top",           // End when the bottom of the container reaches the top of the viewport
        scrub: true,                 // Smooth scrubbing based on scroll position
        // markers: true                // Show markers for debugging (you can remove this later)
    }
    
});
gsap.to("#i3", {
    x: 0,               // Move image 500px to the right
    y: "127.94117647058823vh",               // Move image 200px down
    scale: 1,           // Scale the image to 1.5x
    rotate: 360,          // Rotate the image 360 degrees
    scrollTrigger: {
        trigger: ".container1", // Trigger the animation when this container is in view
        start: "top top",            // Start when the top of the container hits the top of the viewport
        end: "bottom top",           // End when the bottom of the container reaches the top of the viewport
        scrub: true,                 // Smooth scrubbing based on scroll position
        // markers: true                // Show markers for debugging (you can remove this later)
    }
    
});
gsap.to("#i2", {
    x: "-7vw",               // Move image 500px to the right
    y:"108.82352941176471vh",               // Move image 200px down
    scale: 1,           // Scale the image to 1.5x
    rotate: 360,          // Rotate the image 360 degrees
    scrollTrigger: {
        trigger: ".container1", // Trigger the animation when this container is in view
        start: "top top",            // Start when the top of the container hits the top of the viewport
        end: "bottom top",           // End when the bottom of the container reaches the top of the viewport
        scrub: true,                 // Smooth scrubbing based on scroll position
        // markers: true                // Show markers for debugging (you can remove this later)
    }
    
});
gsap.to("#i9", {
    x: " -65.88579795021963vw",               // Move image 500px to the right
    y: "116.17647058823529vh",               // Move image 200px down
    scale: .9,           // Scale the image to 1.5x
    rotate: 270,          // Rotate the image 360 degrees
    scrollTrigger: {
        trigger: ".container1", // Trigger the animation when this container is in view
        start: "top top",            // Start when the top of the container hits the top of the viewport
        end: "bottom top",           // End when the bottom of the container reaches the top of the viewport
        scrub: true,                 // Smooth scrubbing based on scroll position
        // markers: true                // Show markers for debugging (you can remove this later)
    }
    
});
gsap.to("#i6", {
    x: "-21.961932650073205vw",               // Move image 500px to the right
    y: "125vh",               // Move image 200px down
    scale: 1.5,           // Scale the image to 1.5x
    rotate: 270,          // Rotate the image 360 degrees
    scrollTrigger: {
        trigger: ".container1", // Trigger the animation when this container is in view
        start: "top top",            // Start when the top of the container hits the top of the viewport
        end: "bottom top",           // End when the bottom of the container reaches the top of the viewport
        scrub: true,                 // Smooth scrubbing based on scroll position
        // markers: true                // Show markers for debugging (you can remove this later)
    }
    
});
gsap.to("#i10", {
    x: "20vw",               // Move image 500px to the right
    y:" 94.11764705882354vh",               // Move image 200px down
    scale: 1.8,           // Scale the image to 1.5x
    rotate: 90,          // Rotate the image 360 degrees
    scrollTrigger: {
        trigger: ".container1", // Trigger the animation when this container is in view
        start: "top top",            // Start when the top of the container hits the top of the viewport
        end: "bottom top",           // End when the bottom of the container reaches the top of the viewport
        scrub: true,                 // Smooth scrubbing based on scroll position
        // markers: true                // Show markers for debugging (you can remove this later)
    }
    
});
gsap.to("#c2i2", {
    x: "-0.7320644216691069vw",               // Move image 500px to the right
    y:"88.23529411764706vh",               // Move image 200px down
    scale:.6,           // Scale the image to 1.5x
    rotate: 360,          // Rotate the image 360 degrees
    scrollTrigger: {
        trigger: ".section-2", // Trigger the animation when this container is in view
        trigger: ".section-2",
        start: "top 70%",
    end: "bottom 110%",
        scrub: true,                 // Smooth scrubbing based on scroll position
        markers: false                // Show markers for debugging (you can remove this later)
    }
    
});
gsap.to("#c2i1", {
    x: "35vw",               // Move image 500px to the right
    y:" 72.79411764705883vh",               // Move image 200px down
    scale:.5,           // Scale the image to 1.5x
    rotate: 360,          // Rotate the image 360 degrees
    scrollTrigger: {
        trigger: ".section-2", // Trigger the animation when this container is in view
        trigger: ".section-2",
        start: "top 70%",
    end: "bottom 110%",
        scrub: true,                 // Smooth scrubbing based on scroll position
        markers: false                // Show markers for debugging (you can remove this later)
    }
    
});

//   gsap.to(...);
//   gsap.from(...);
//   ScrollTrigger.create({...});

//   return () => { // optional
//     // custom cleanup code here (runs when it STOPS matching)
//   };
});

// later, if we need to revert all the animations/ScrollTriggers...
// mm.revert();

mm.add("(max-width: 800px)", () => {

    gsap.to("#i5", {
        x: "-29.282576866764277vw",               // Move image 500px to the right
        y: 1110,               // Move image 200px down
        scale: 1,           // Scale the image to 1.5x
        rotate: 360,          // Rotate the image 360 degrees
        scrollTrigger: {
            trigger: ".container1", // Trigger the animation when this container is in view
            start: "top top",            // Start when the top of the container hits the top of the viewport
            end: "bottom top",           // End when the bottom of the container reaches the top of the viewport
            scrub: true,                 // Smooth scrubbing based on scroll position
            // markers: true                // Show markers for debugging (you can remove this later)
        }
        
    });
    gsap.to("#i4", {
        x: "-41vw",               // Move image 500px to the right
        y: 1100,               // Move image 200px down
        scale: 1.2,           // Scale the image to 1.5x
        rotate: 270,          // Rotate the image 360 degrees
        scrollTrigger: {
            trigger: ".container1", // Trigger the animation when this container is in view
            start: "top top",            // Start when the top of the container hits the top of the viewport
            end: "bottom top",           // End when the bottom of the container reaches the top of the viewport
            scrub: true,                 // Smooth scrubbing based on scroll position
            // markers: true                // Show markers for debugging (you can remove this later)
        }
        
    });
    gsap.to("#i3", {
        x: "4vh",               // Move image 500px to the right
        y: 870,               // Move image 200px down
        scale: 1,           // Scale the image to 1.5x
        rotate: 360,          // Rotate the image 360 degrees
        scrollTrigger: {
            trigger: ".container1", // Trigger the animation when this container is in view
            start: "top top",            // Start when the top of the container hits the top of the viewport
            end: "bottom top",           // End when the bottom of the container reaches the top of the viewport
            scrub: true,                 // Smooth scrubbing based on scroll position
            // markers: true                // Show markers for debugging (you can remove this later)
        }
        
    });
    gsap.to("#i2", {
        x: "-2vw",               // Move image 500px to the right
        y: 860,               // Move image 200px down
        scale: 1,           // Scale the image to 1.5x
        rotate: 360,          // Rotate the image 360 degrees
        scrollTrigger: {
            trigger: ".container1", // Trigger the animation when this container is in view
            start: "top top",            // Start when the top of the container hits the top of the viewport
            end: "bottom top",           // End when the bottom of the container reaches the top of the viewport
            scrub: true,                 // Smooth scrubbing based on scroll position
            // markers: true                // Show markers for debugging (you can remove this later)
        }
        
    });
    gsap.to("#i9", {
        x: " -62vw",               // Move image 500px to the right
        y: 890,               // Move image 200px down
        scale: .6,           // Scale the image to 1.5x
        rotate: 270,          // Rotate the image 360 degrees
        scrollTrigger: {
            trigger: ".container1", // Trigger the animation when this container is in view
            start: "top top",            // Start when the top of the container hits the top of the viewport
            end: "bottom top",           // End when the bottom of the container reaches the top of the viewport
            scrub: true,                 // Smooth scrubbing based on scroll position
            // markers: true                // Show markers for debugging (you can remove this later)
        }
        
    });
    gsap.to("#i6", {
        x: "-23vw",               // Move image 500px to the right
        y: 1010,               // Move image 200px down
        scale: 1.2,           // Scale the image to 1.5x
        rotate: 270,          // Rotate the image 360 degrees
        scrollTrigger: {
            trigger: ".container1", // Trigger the animation when this container is in view
            start: "top top",            // Start when the top of the container hits the top of the viewport
            end: "bottom top",           // End when the bottom of the container reaches the top of the viewport
            scrub: true,                 // Smooth scrubbing based on scroll position
            // markers: true                // Show markers for debugging (you can remove this later)
        }
        
    });
    gsap.to("#i10", {
        x: "-10vw",               // Move image 500px to the right
        y:730,               // Move image 200px down
        scale: 1,           // Scale the image to 1.5x
        rotate: 360,          // Rotate the image 360 degrees
        scrollTrigger: {
            trigger: ".container1", // Trigger the animation when this container is in view
            start: "top top",            // Start when the top of the container hits the top of the viewport
            end: "bottom top",           // End when the bottom of the container reaches the top of the viewport
            scrub: true,                 // Smooth scrubbing based on scroll position
            // markers: true                // Show markers for debugging (you can remove this later)
        }
        
    });
    gsap.to("#c2i2", {
        x: "4vw",               // Move image 500px to the right
        y:700,               // Move image 200px down
        scale:.6,           // Scale the image to 1.5x
        rotate: 360,          // Rotate the image 360 degrees
        scrollTrigger: {
            trigger: ".section-2", // Trigger the animation when this container is in view
            trigger: ".section-2",
            start: "top 70%",
        end: "bottom 110%",
            scrub: true,                 // Smooth scrubbing based on scroll position
            markers: false                // Show markers for debugging (you can remove this later)
        }
        
    });
    gsap.to("#c2i1", {
        x: "38vw",               // Move image 500px to the right
        y:550,               // Move image 200px down
        scale:.5,           // Scale the image to 1.5x
        rotate: 360,          // Rotate the image 360 degrees
        scrollTrigger: {
            trigger: ".section-2", // Trigger the animation when this container is in view
            trigger: ".section-2",
            start: "top 70%",
        end: "bottom 110%",
            scrub: true,                 // Smooth scrubbing based on scroll position
            markers: false                // Show markers for debugging (you can remove this later)
        }
        
    });

 

});

mm.add("(max-width: 550px)", () => {

    

    gsap.to("#i5", {
        x: "-18vw",               // Move image 500px to the right
        y: "117.6470588235294vh",              // Move image 200px down
        scale: 1,           // Scale the image to 1.5x
        rotate: 360,          // Rotate the image 360 degrees
        scrollTrigger: {
            trigger: ".container1", // Trigger the animation when this container is in view
            start: "top top",            // Start when the top of the container hits the top of the viewport
            end: "bottom top",           // End when the bottom of the container reaches the top of the viewport
            scrub: true,                 // Smooth scrubbing based on scroll position
            // markers: true                // Show markers for debugging (you can remove this later)
        }
        
    });
    gsap.to("#i4", {
        x: "-41vw",               // Move image 500px to the right
        y: "161.76470588235293vh",               // Move image 200px down
        scale: 1.2,           // Scale the image to 1.5x
        rotate: 270,          // Rotate the image 360 degrees
        scrollTrigger: {
            trigger: ".container1", // Trigger the animation when this container is in view
            start: "top top",            // Start when the top of the container hits the top of the viewport
            end: "bottom top",           // End when the bottom of the container reaches the top of the viewport
            scrub: true,                 // Smooth scrubbing based on scroll position
            // markers: true                // Show markers for debugging (you can remove this later)
        }
        
    });
    gsap.to("#i3", {
        x: "24vw",               // Move image 500px to the right
        y: "127.94vh",               // Move image 200px down
        scale: 1,           // Scale the image to 1.5x
        rotate: 360,          // Rotate the image 360 degrees
        scrollTrigger: {
            trigger: ".container1", // Trigger the animation when this container is in view
            start: "top top",            // Start when the top of the container hits the top of the viewport
            end: "bottom top",           // End when the bottom of the container reaches the top of the viewport
            scrub: true,                 // Smooth scrubbing based on scroll position
            // markers: true                // Show markers for debugging (you can remove this later)
        }
        
    });
    gsap.to("#i2", {
        x: "-2vw",               // Move image 500px to the right
        y: "108.8vh",               // Move image 200px down
        scale: 1,           // Scale the image to 1.5x
        rotate: 360,          // Rotate the image 360 degrees
        scrollTrigger: {
            trigger: ".container1", // Trigger the animation when this container is in view
            start: "top top",            // Start when the top of the container hits the top of the viewport
            end: "bottom top",           // End when the bottom of the container reaches the top of the viewport
            scrub: true,                 // Smooth scrubbing based on scroll position
            // markers: true                // Show markers for debugging (you can remove this later)
        }
        
    });
    gsap.to("#i9", {
        x: " -38vw",               // Move image 500px to the right
        y: "116.17647058823529vh",               // Move image 200px down
        scale: .6,           // Scale the image to 1.5x
        rotate: 270,          // Rotate the image 360 degrees
        scrollTrigger: {
            trigger: ".container1", // Trigger the animation when this container is in view
            start: "top top",            // Start when the top of the container hits the top of the viewport
            end: "bottom top",           // End when the bottom of the container reaches the top of the viewport
            scrub: true,                 // Smooth scrubbing based on scroll position
            // markers: true                // Show markers for debugging (you can remove this later)
        }
        
    });
    gsap.to("#i6", {
        x: "-30vw",               // Move image 500px to the right
        y: "125vh",               // Move image 200px down
        scale: 1.2,           // Scale the image to 1.5x
        rotate: 270,          // Rotate the image 360 degrees
        scrollTrigger: {
            trigger: ".container1", // Trigger the animation when this container is in view
            start: "top top",            // Start when the top of the container hits the top of the viewport
            end: "bottom top",           // End when the bottom of the container reaches the top of the viewport
            scrub: true,                 // Smooth scrubbing based on scroll position
            // markers: true                // Show markers for debugging (you can remove this later)
        }
        
    });
    gsap.to("#i10", {
        x: "-10vw",               // Move image 500px to the right
        y:" 102vh",              // Move image 200px down
        scale: 1.3,           // Scale the image to 1.5x
        rotate: 360,          // Rotate the image 360 degrees
        scrollTrigger: {
            trigger: ".container1", // Trigger the animation when this container is in view
            start: "top top",            // Start when the top of the container hits the top of the viewport
            end: "bottom top",           // End when the bottom of the container reaches the top of the viewport
            scrub: true,                 // Smooth scrubbing based on scroll position
            // markers: true                // Show markers for debugging (you can remove this later)
        }
        
    });
    gsap.to("#c2i2", {
        x: "0vw",               // Move image 500px to the right
        
        y:  "94vh" ,              // Move image 200px down
        scale:.6,           // Scale the image to 1.5x
        rotate: 360,          // Rotate the image 360 degrees
        scrollTrigger: {
            trigger: ".section-2", // Trigger the animation when this container is in view
             trigger: ".section-2",
            start: "top 70%",
        end: "bottom 110%",
            scrub: true,                 // Smooth scrubbing based on scroll position
            markers: false                // Show markers for debugging (you can remove this later)
        }
        
    });
    gsap.to("#c2i1", {
        x: "38vw",               // Move image 500px to the right
        y:"72.8vh",             // Move image 200px down
        scale:.5,           // Scale the image to 1.5x
        rotate: 360,          // Rotate the image 360 degrees
        scrollTrigger: {
            trigger: ".section-2", // Trigger the animation when this container is in view
            trigger: ".section-2",
            start: "top 70%",
        end: "bottom 110%",
            scrub: true,                 // Smooth scrubbing based on scroll position
            markers: false                // Show markers for debugging (you can remove this later)
        }
        
    });


});
mm.add("(max-width: 400px)", () => {

    gsap.to("#i5", {
        x: "-18vw",               // Move image 500px to the right
        y: "117.6470588235294vh",            // Move image 200px down
        scale: 1,           // Scale the image to 1.5x
        rotate: 360,          // Rotate the image 360 degrees
        scrollTrigger: {
            trigger: ".container1", // Trigger the animation when this container is in view
            start: "top top",            // Start when the top of the container hits the top of the viewport
            end: "bottom top",           // End when the bottom of the container reaches the top of the viewport
            scrub: true,                 // Smooth scrubbing based on scroll position
            // markers: true                // Show markers for debugging (you can remove this later)
        }
        
    });
    gsap.to("#i4", {
        x: "-41vw",               // Move image 500px to the right
        y: "161.76470588235293vh",               // Move image 200px down
        scale: 1,           // Scale the image to 1.5x
        rotate: 270,          // Rotate the image 360 degrees
        scrollTrigger: {
            trigger: ".container1", // Trigger the animation when this container is in view
            start: "top top",            // Start when the top of the container hits the top of the viewport
            end: "bottom top",           // End when the bottom of the container reaches the top of the viewport
            scrub: true,                 // Smooth scrubbing based on scroll position
            // markers: true                // Show markers for debugging (you can remove this later)
        }
        
    });
    gsap.to("#i3", {
        x: "24vw",               // Move image 500px to the right
        y: "127.94117647058823vh",               // Move image 200px down
        scale: 1,           // Scale the image to 1.5x
        rotate: 360,          // Rotate the image 360 degrees
        scrollTrigger: {
            trigger: ".container1", // Trigger the animation when this container is in view
            start: "top top",            // Start when the top of the container hits the top of the viewport
            end: "bottom top",           // End when the bottom of the container reaches the top of the viewport
            scrub: true,                 // Smooth scrubbing based on scroll position
            // markers: true                // Show markers for debugging (you can remove this later)
        }
        
    });
    gsap.to("#i2", {
        x: "-2vw",               // Move image 500px to the right
        y: "108.8vh",               // Move image 200px down
        scale: 1,           // Scale the image to 1.5x
        rotate: 360,          // Rotate the image 360 degrees
        scrollTrigger: {
            trigger: ".container1", // Trigger the animation when this container is in view
            start: "top top",            // Start when the top of the container hits the top of the viewport
            end: "bottom top",           // End when the bottom of the container reaches the top of the viewport
            scrub: true,                 // Smooth scrubbing based on scroll position
            // markers: true                // Show markers for debugging (you can remove this later)
        }
        
    });
    gsap.to("#i9", {
        x: " -38vw",               // Move image 500px to the right
        y: "116.17647058823529vh",           // Move image 200px down
        scale: .6,           // Scale the image to 1.5x
        rotate: 270,          // Rotate the image 360 degrees
        scrollTrigger: {
            trigger: ".container1", // Trigger the animation when this container is in view
            start: "top top",            // Start when the top of the container hits the top of the viewport
            end: "bottom top",           // End when the bottom of the container reaches the top of the viewport
            scrub: true,                 // Smooth scrubbing based on scroll position
            // markers: true                // Show markers for debugging (you can remove this later)
        }
        
    });
    gsap.to("#i6", {
        x: "-30vw",               // Move image 500px to the right
        y: "125vh",               // Move image 200px down
        scale: 1,           // Scale the image to 1.5x
        rotate: 270,          // Rotate the image 360 degrees
        scrollTrigger: {
            trigger: ".container1", // Trigger the animation when this container is in view
            start: "top top",            // Start when the top of the container hits the top of the viewport
            end: "bottom top",           // End when the bottom of the container reaches the top of the viewport
            scrub: true,                 // Smooth scrubbing based on scroll position
            // markers: true                // Show markers for debugging (you can remove this later)
        }
        
    });
    gsap.to("#i10", {
        x: "-10vw",               // Move image 500px to the right
        y:" 102vh",           // Move image 200px down
        scale: 1.3,           // Scale the image to 1.5x
        rotate: 360,          // Rotate the image 360 degrees
        scrollTrigger: {
            trigger: ".container1", // Trigger the animation when this container is in view
            start: "top top",            // Start when the top of the container hits the top of the viewport
            end: "bottom top",           // End when the bottom of the container reaches the top of the viewport
            scrub: true,                 // Smooth scrubbing based on scroll position
            // markers: true                // Show markers for debugging (you can remove this later)
        }
        
    });
    gsap.to("#c2i2", {
        x: "0vw",               // Move image 500px to the right
      y:  "94vh" ,            // Move image 200px down
        scale:.6,           // Scale the image to 1.5x
        rotate: 360,          // Rotate the image 360 degrees
        scrollTrigger: {
            trigger: ".section-2", // Trigger the animation when this container is in view
             trigger: ".section-2",
            start: "top 70%",
        end: "bottom 110%",
            scrub: true,                 // Smooth scrubbing based on scroll position
            markers: false                // Show markers for debugging (you can remove this later)
        }
        
    });
    gsap.to("#c2i1", {
        x: "38vw",               // Move image 500px to the right
        y:"72.8vh",               // Move image 200px down
        scale:.5,           // Scale the image to 1.5x
        rotate: 360,          // Rotate the image 360 degrees
        scrollTrigger: {
            trigger: ".section-2", // Trigger the animation when this container is in view
            trigger: ".section-2",
            start: "top 70%",
        end: "bottom 110%",
            scrub: true,                 // Smooth scrubbing based on scroll position
            markers: false                // Show markers for debugging (you can remove this later)
        }
        
    });


});

// mm.revert();


//   hidden elements - 1
  // Grab the hidden text in Viewport 2
  const hiddenText1 = document.getElementById('c2h1');
  const hiddenText2 = document.getElementById('c2h2');
  const hiddenText3 = document.getElementById('c2p1');

  // Set up Intersection Observer for visibility detection
  const observer1 = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              // Show the text when viewport 2 is in view
              hiddenText1.classList.add('visible');
              hiddenText2.classList.add('visible');
              hiddenText3.classList.add('visible');
          } else {
              // Hide the text when viewport 2 is out of view
              hiddenText1.classList.remove('visible');
              hiddenText2.classList.remove('visible');
              hiddenText3.classList.remove('visible');
          }
      });
  }, { threshold: 0.3 }); // Trigger when 30% of the viewport is visible

  // Observe the middle viewport (Viewport 2)
  observer1.observe(document.getElementById('viewport2'));


//   hidden elements - 2  

const hiddenText4 = document.getElementById('c4h1');
const hiddenText5 = document.getElementById('c4p1');
const hiddenText6 = document.getElementById('c4i1');

  const observer2 = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              // Show the text when viewport 2 is in view
              hiddenText4.classList.add('visible');
              hiddenText5.classList.add('visible');
              hiddenText6.classList.add('visible');
          } else {
              // Hide the text when viewport 2 is out of view
              hiddenText4.classList.remove('visible');
              hiddenText5.classList.remove('visible');
              hiddenText6.classList.remove('visible');
          }
      });
  }, { threshold: 0.4 }); // Trigger when 30% of the viewport is visible

  // Observe the middle viewport (Viewport 2)
  observer2.observe(document.querySelector('.slider-container'));


// Code to animate bottle movement across the screen and reveal text on scroll
const image = document.querySelector(".image-wrapper");
const textWrappers = document.querySelectorAll(".text-wrapper");

// Scroll animation logic for the bottle moving and text reveal
gsap.registerPlugin(ScrollTrigger);

gsap.to(image, {
    // x: () => window.innerWidth - 700, // Move image from left to right
    x:"50vw",
    ease: "power1.out",
    scrollTrigger: {
        trigger: ".section-2", // Trigger the animation when .section-2 is in view
        start: "top 70%",      // Start when .section-2 reaches 60% of the viewport height
        end: "bottom 110%",     // End when .section-2 is out of view
        scrub: true,           // Smooth animation
        
    }
});

// Reveal text based on the scroll position
ScrollTrigger.create({
    trigger: ".section-2",
    start: "top 100%",
    end: "bottom 110%",
    scrub: true,
    onUpdate: self => {
        const scrollProgress = self.progress * (window.innerWidth - 700); // Update based on scroll position
        textWrappers.forEach((textWrapper, index) => {
            const textLeftPosition = parseFloat(textWrapper.style.left);
            if (scrollProgress >= textLeftPosition) {
                textWrapper.classList.add("revealed");
            } else {
                textWrapper.classList.remove("revealed");
            }
        });
    }
});


//container-4
// Get references to HTML elements
const sliderContainer = document.querySelector(".slider-container");
const slidesLeft = document.querySelector(".left-slide");
const slidesRight = document.querySelector(".right-slide");
const upButton = document.querySelector(".up-button");
const downButton = document.querySelector(".down-button");

// Calculate the total number of slides
const slidesLength = slidesRight.querySelectorAll("div").length;

// Initialize the active slide index
let activeSlidesIndex = 0;

// Set initial position for left slides
slidesLeft.style.top = `-${(slidesLength - 1) * 100}vh`;

// Add click event listeners to up and down buttons
upButton.addEventListener("click", () => changeSlide("up"));
downButton.addEventListener("click", () => changeSlide("down"));

// Function to change the active slide
const changeSlide = (direction) => {
  const sliderHeight = sliderContainer.clientHeight;
  if (direction === "down") {
    activeSlidesIndex++;
    if (activeSlidesIndex > slidesLength - 1) {
      activeSlidesIndex = 0;
    }
  } else if (direction === "up") {
    activeSlidesIndex--;
    if (activeSlidesIndex < 0) {
      activeSlidesIndex = slidesLength - 1;
    }
  }

  // Update the transform property to change the slide position
  slidesRight.style.transform = `translateY(-${
    activeSlidesIndex * sliderHeight
  }px)`;
  slidesLeft.style.transform = `translateY(${
    activeSlidesIndex * sliderHeight
  }px)`;
};






function animate(obj, initVal, lastVal, duration) {
    let startTime = null;

 //Get The Current Timestamp And Assign It To The currentTime Variable.
 let currentTime = Date.now();

 //Pass The Current Timestamp To The Step Function.
 const step = (currentTime ) => {

 //If The Start Time Is Null, Assign The Current Time To startTime.
 if (!startTime) {
    startTime = currentTime ;
 }

 //Calculate The Value To Be Used In Calculating The Number To Be Displayed.
 const progress = Math.min((currentTime - startTime)/ duration, 1);

 //Calculate What To Be Displayed Using The Value From Above.
 obj.innerHTML = `${Math.floor(progress * (lastVal - initVal) + initVal)}+`;

 //Checking To Make Sure The Counter Does NOT Exceed The Last Value (lastVal).
 if (progress < 1) {
    window.requestAnimationFrame(step);
 } else {
       window.cancelAnimationFrame(window.requestAnimationFrame(step));
    }
 };
 //Start Animating
    window.requestAnimationFrame(step);
 }

 let text1 = document.getElementById('stats-1');
 let text2 = document.getElementById('stats-2');
//  let text3 = document.getElementById('stats-3');
 const load = () => {
    animate(text1, 0, 700, 7000);
    animate(text2, 0, 500, 7000);
    // animate(text3, 0, 24/7, 7000);
    //animate(text3, 100, 25, 7000);
 }





  const observer3 = new IntersectionObserver((entries) => {
   

    
      entries.forEach(entry => {
          if (entry.isIntersecting) {
           
              load();
              observer3.disconnect(); // Disconnect after triggering once
          }
      });
   
  }, { threshold: 0 }); // Trigger when 30% of the viewport is visible

  // Observe the middle viewport (Viewport 2)
  observer3.observe(document.querySelector('.row'));


// container-3 text

const prevValue1=document.querySelector("#c3h1").style.left;
const prevValue2=document.querySelector("#c3h2").style.left;
const prevValue3=document.querySelector("#c3h3").style.left;
function myFunction(x) {
    if (x.matches) { // If media query matches
        document.querySelector("#c3h1").style.left="5vw";
        document.querySelector("#c3h2").style.left="20vw";
        document.querySelector("#c3h3").style.left="37vw";
      
    }else{
        document.querySelector("#c3h1").style.left= prevValue1;
        document.querySelector("#c3h2").style.left= prevValue2;
        pdocument.querySelector("#c3h3").style.left= prevValue3;
      

    }
  }
  
  // Create a MediaQueryList object
  var x = window.matchMedia("(max-width: 1000px)")
  
  // Call listener function at run time
  myFunction(x);
  
  // Attach listener function on state changes
  x.addEventListener("change", function() {
    myFunction(x);
  });
  