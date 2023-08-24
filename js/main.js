// this is for loading
window.addEventListener("load", (_) => {
  document.querySelector(".loading").classList.add("hide");
  document.body.style.overflow = "visible";
  // this for header animate
  document.querySelector("header").classList.add("animate__backInDown");
  document.querySelector("main img").classList.add("animate__backInRight");
  document
    .querySelector("main .container .left_content")
    .classList.add("animate__backInRight");
});
// this is for header section
const more_option = document.querySelector("header nav a.more_option"),
  bar = document.querySelector(".bar_icon");
// to add and remove the menu
more_option.addEventListener("click", (_) => {
  if (more_option.lastElementChild.classList.contains("hide"))
    more_option.lastElementChild.classList.remove("hide");
  else {
    more_option.lastElementChild.classList.add("hide");
  }
});
more_option.firstElementChild.addEventListener("click", (_) => {
  if (more_option.lastElementChild.classList.contains("hide")) {
    more_option.lastElementChild.classList.remove("hide");
  } else {
    more_option.lastElementChild.classList.add("hide");
  }
});
// this is for modes
let mode = localStorage.getItem("mode") || "light";
let dark_mode = document.querySelector(".fa-moon");
dark_mode.addEventListener("click", (_) => {
  document.querySelector("body").classList.toggle("dark_mode");
  if(document.querySelector("body").classList.contains("dark_mode")){
    localStorage.setItem("mode","dark")
  }
  else{
    localStorage.setItem("mode","light")

  }
  if (document.querySelector("main").style.background != "black") {
    document.querySelector("main").style.background = "black";
  } else {
    document.querySelector("main").style.background = "";
  }
});
// TO SAVE MODE IN localStorage
function save_mode(){
  if (mode == "light"){
    document.querySelector("main").style.background = "";
    document.querySelector("body").classList.remove("dark_mode");
    
    
  }
  else{
    document.querySelector("body").classList.add("dark_mode");
    document.querySelector("main").style.background = "black";

}
}
save_mode()
// to remove the menu on clicking on any place
document.addEventListener("click", (e) => {
  if (e.target != more_option) {
    more_option.lastElementChild.classList.add("hide");
  }
  if (window.innerWidth <= 768) {
    if (
      e.target != more_option.parentElement &&
      e.target != bar.firstElementChild &&
      e.target != more_option &&
      e.target != more_option.firstElementChild
    ) {
      more_option.parentElement.classList.add("hide");
    } else {
      more_option.parentElement.classList.remove("hide");
    }
  }
});
bar.addEventListener("click", (e) => {
  if (!more_option.parentElement.classList.contains("active_nav")) {
    more_option.firstElementChild.classList.add("transform_icon");
    more_option.lastElementChild.classList.add("transform_menu");
    more_option.parentElement.classList.add("active_nav");
  } else {
    more_option.firstElementChild.classList.remove("transform_icon");
    more_option.lastElementChild.classList.remove("transform_menu");
    more_option.parentElement.classList.remove("active_nav");
  }
});
let links = document.querySelectorAll("header nav a")
for (const iterator of links) {
  iterator.addEventListener("click",_=>{
    more_option.parentElement.classList.remove("active_nav");

  })
}
// this is for main section
// for rotate the string in the main section
const video_text = document.querySelector(".video_text");
let text_rotate = video_text.lastElementChild.innerText;
video_text.lastElementChild.innerText = "";
arr_text = text_rotate.split("");
for (let index = 1; index < arr_text.length; index++) {
  let div = document.createElement("div");
  div.innerText = arr_text[index];
  div.style.transform = `rotate(${index * 24}deg)`;
  div.style.width = "2rem";
  div.style.height = "2rem";
  div.style.transformOrigin = " 0 60px";
  div.style.fontSize = "2rem";
  div.style.position = "absolute";
  div.style.top = "-10%";
  div.style.right = "0";
  div.style.zIndex = "2";
  div.style.fontSize = "0.8rem";

  video_text.lastElementChild.append(div);
}

const imgs = document.querySelectorAll(
  "main .container .right_content  .hero_img img"
);
const pre_next_div = document.querySelector(
  "main .container .right_content  .counter .pre_next"
);
let index = 0;
let count = 1;
pre_next_div.lastElementChild.addEventListener("click", (_) => {
  if (index < imgs.length) {
    if (index >= 0 && index <= imgs.length - 2) {
      if (index <= 9) {
        pre_next_div.previousElementSibling.innerText = `0${++count}`;
      } else {
        pre_next_div.previousElementSibling.innerText = `${++count}`;
      }
      if (imgs[index + 1].classList.contains("trsanform_x")) {
        imgs[index + 1].classList.remove("trsanform_x");
      }
      imgs[index].classList.add("trsanform_x");
      imgs[index].classList.add("hide");
      imgs[++index].classList.remove("hide");
    } else {
      if (pre_next_div.previousElementSibling.innerText == `0${imgs.length}`) {
        pre_next_div.previousElementSibling.innerText = `0${1}`;
        count = 1;
      }
      imgs[index].classList.add("trsanform_x");
      imgs[index].classList.add("hide");
      imgs[0].classList.remove("hide");
      imgs[0].classList.remove("trsanform_x");
      index = 0;
    }
  }
});
pre_next_div.firstElementChild.addEventListener("click", (_) => {
  if (index < imgs.length) {
    if (index >= 1 && index <= imgs.length - 1) {
      if (index <= 9) {
        pre_next_div.previousElementSibling.innerText = `0${--count}`;
      } else {
        pre_next_div.previousElementSibling.innerText = `${--count}`;
      }
      if (imgs[index - 1].classList.contains("trsanform_x")) {
        imgs[index - 1].classList.remove("trsanform_x");
      }
      imgs[index].classList.add("trsanform_x");
      imgs[index].classList.add("hide");
      imgs[--index].classList.remove("hide");
    } else {
      if (index <= 9) {
        if (pre_next_div.previousElementSibling.innerText == "01") {
          count = imgs.length;
          pre_next_div.previousElementSibling.innerText = `0${imgs.length}`;
        }
      } else {
        pre_next_div.previousElementSibling.innerText = `${--count}`;
      }
      imgs[index].classList.add("trsanform_x");
      imgs[index].classList.add("hide");
      imgs[imgs.length - 1].classList.remove("hide");
      imgs[imgs.length - 1].classList.remove("trsanform_x");

      index = imgs.length - 1;
    }
  }
});

// js for features section
let start = false;
let features_section = document.querySelector("section.features");
let hs = document.querySelectorAll("section.features .box h3");
let features_section_offset = features_section.offsetTop;
for (let iterator of hs) {
  iterator.innerText = 0;
}
hs[5].innerText = 2;
window.addEventListener("scroll", (e) => {
  if (scrollY >= features_section_offset - 400) {
    if (!start)
      for (let iterator of hs) {
        let counter = iterator.getAttribute("timer");
        setInterval(change, 150, iterator, counter);
      }
    start = false;
  }
});

let x = 0;

let change = function (item, counter) {
  if (x < counter) {
    item.innerText = `${x++}`;
  }
};

// js for Product_Information  section

const Product_Information_section = document.querySelector(
    "section.Product_Information"
  ),
  Product_Information_section_img = document.querySelector(
    "section.Product_Information img"
  ),
  header_content_Product_Information = document.querySelector(
    "section.Product_Information .container .header_content"
  );
(odd_boxes = document.querySelectorAll(
  "section.Product_Information .container .main_content .right_content>:nth-child(odd)"
)),
  (even_boxes = document.querySelectorAll(
    "section.Product_Information .container .main_content .right_content>:nth-child(even)"
  ));
let Product_Information_section_offset = Product_Information_section.offsetTop;
window.addEventListener("scroll", (e) => {
  if (scrollY >= Product_Information_section_offset - 400) {
    Product_Information_section_img.classList.add("animate__fadeInDown");
    header_content_Product_Information.classList.add("transform_header_text");
  }
  if (scrollY >= Product_Information_section_offset + 200) {
    for (const iterator of odd_boxes) {
      iterator.classList.remove("transformX_oddbox");
      for (const iterator of even_boxes) {
        iterator.classList.remove("transformX_evenbox");
      }
    }
  }
});

// js for Efficiency_motor  section
const Efficiency_motor_scetion = document.querySelector(
    "section.Efficiency_motor"
  ),
  Efficiency_motor_scetion_img = document.querySelector(
    "section.Efficiency_motor img"
  ),
  header_content_Efficiency_motor = document.querySelector(
    "section.Efficiency_motor .container .header_content"
  );
let Efficiency_motor_scetion_offset = Efficiency_motor_scetion.offsetTop;

window.addEventListener("scroll", (e) => {
  if (scrollY >= Efficiency_motor_scetion_offset - 300) {
    Efficiency_motor_scetion_img.classList.add("animate__bounceIn");
    Efficiency_motor_scetion_img.classList.remove("hide");
    header_content_Efficiency_motor.classList.add("transform_header_text");
  }
});
// js for section.Accessories  section

const Accessories_scetion = document.querySelector("section.Accessories"),
  header_content_Accessories_scetion = document.querySelector(
    "section.Accessories .container .header_content"
  ),
  right_content_img = document.querySelector(
    "section.Accessories .container .main_content .right_content"
  ),
  boxes_Accessories = document.querySelectorAll(
    "section.Accessories .container .main_content .left_content .box"
  );
let Accessories_scetion_offset = Accessories_scetion.offsetTop;
let key = 0;
window.addEventListener("scroll", (e) => {
  if (scrollY >= Accessories_scetion_offset + 400) {
    header_content_Accessories_scetion.classList.add("transform_header_text");
    right_content_img.firstElementChild.classList.add("transformY_firstInmg");
    right_content_img.lastElementChild.classList.add("transformY_sceInmg");
    for (const item of boxes_Accessories) {
      item.classList.add("transfotm_loop");
    }
  }
});

//  js for cargo_rack section

const boxes_cargo_rack = document.querySelectorAll(
  ".cargo_rack .container .right_content .box"
);
cargo_rack_section = document.querySelector("section.cargo_rack");
let cargo_rack_scetion_offset = cargo_rack_section.offsetTop;
window.addEventListener("scroll", (e) => {
  if (scrollY >= cargo_rack_scetion_offset + 300) {
    cargo_rack_section.classList.add("animate__fadeInTopLeft");
  }
});

// js for gallery section

window.addEventListener("scroll", (e) => {
  const section_gallery = document.querySelector("section.gallery"),
    section_left_img_box = document.querySelector(
      "section.gallery .left_content .box"
    ),
    section_left_buttons = document.querySelector(
      "section.gallery .left_content .buttons"
    ),
    section_right_top_img_box = document.querySelector(
      "section.gallery .right_content .box"
    ),
    header_content_GallerySection = document.querySelector(
      "section.gallery .header_content"
    );
  let section_gallery_offset = section_gallery.offsetTop;
  if (scrollY >= section_gallery_offset - 400) {
    header_content_GallerySection.classList.add("transform_header_text");
  }
  if (scrollY >= section_gallery_offset - 200) {
    section_left_img_box.classList.add("animate__backInLeft");
    section_left_img_box.style.opacity = "1";

    section_right_top_img_box.classList.add("animate__backInDown");
    section_left_img_box.style.opacity = "1";
  }
  if (scrollY >= section_gallery_offset + 100) {
    section_right_top_img_box.nextElementSibling.classList.add(
      "animate__backInRight"
    );
    section_right_top_img_box.nextElementSibling.style.opacity = "1";
    section_left_buttons.style.opacity = "1";
  }
});

// js for color section
window.addEventListener("scroll", (e) => {
  const section_color = document.querySelector("section.color"),
    header_content_color = document.querySelector(
      "section.color .header_content"
    );

  let section_color_offset = section_color.offsetTop;
  if (scrollY >= section_color_offset - 400) {
    header_content_color.classList.add("transform_header_text");
  }
});

const imgs_color = document.querySelectorAll(
    "section.color .main_content .images .box img"
  ),
  main_img = document.querySelector("section.color .main_img img");
for (const iterator of imgs_color) {
  iterator.onclick = (e) => {
    let x = iterator.src;
    // iterator.src = main_img.src;
    main_img.src = x;
    // main_img.style.width = "400px";
  };
}

// js for testimonials section
const section_testimonials = document.querySelector("section.testimonials");
const header_content_section_testimonials = document.querySelector(
  "section.testimonials .header_content"
);
const boxes_section_testimonials = document.querySelectorAll(
  "section.testimonials .container .box"
);

window.addEventListener("scroll", (e) => {
  let section_testimonials_offset = section_testimonials.offsetTop;
  if (scrollY >= section_testimonials_offset - 400) {
    header_content_section_testimonials.classList.add("transform_header_text");
  }
  if (scrollY >= section_testimonials_offset) {
    for (const iterator of boxes_section_testimonials) {
      iterator.classList.remove("transformX_box");
    }
  }
});

const next = document.querySelector(
    "section.testimonials .next_pre :last-child"
  ),
  pre = document.querySelector("section.testimonials .next_pre :first-child"),
  boxesAll = document.querySelectorAll("section.testimonials .container .box");
let i = 0;

next.addEventListener("click", () => {
  if (i == boxesAll.length - 1) {
    clearbefor(boxesAll, "active");
    boxesAll[0].classList.add("active");
    i = 0;
  } else {
    clearbefor(boxesAll, "active");
    boxesAll[i + 1].classList.add("active");
    i++;
  }
});

function clearbefor(arr, className) {
  if (i == arr.length - 1) {
    arr[0].classList.remove(className);
  }
  arr[i].classList.remove(className);
}

pre.addEventListener("click", () => {
  if (i == 0) {
    clearAfter(boxesAll, "active");
    boxesAll[boxesAll.length - 1].classList.add("active");
    i = boxesAll.length - 1;
  } else {
    clearAfter(boxesAll, "active");
    boxesAll[i - 1].classList.add("active");
    i--;
  }
});

function clearAfter(arr, className) {
  if (i == arr.length - 1) {
    arr[0].classList.remove(className);
  }
  arr[i].classList.remove(className);
}
const star_box_1 = document.querySelectorAll(
  "section.testimonials .box .first i"
);
const star_box_2 = document.querySelectorAll(
  "section.testimonials .box .sec i"
);
const star_box_3 = document.querySelectorAll(
  "section.testimonials .box .third i"
);
starsClick(star_box_1);
starsClick(star_box_2);
starsClick(star_box_3);

function starsClick(arr) {
  for (const iterator in arr) {
    arr[iterator].onclick = (_) => {
      addStar(iterator);
    };
  }
  function addStar(iterator) {
    clearStar();
    for (let index = 0; index <= iterator; index++) {
      arr[index].classList.add("backgroung");
    }
  }

  function clearStar() {
    for (let index = 0; index < arr.length; index++) {
      arr[index].classList.remove("backgroung");
    }
  }
}

starsEnter(star_box_1);
starsEnter(star_box_2);
starsEnter(star_box_3);

function starsEnter(arr) {
  for (const iterator in arr) {
    arr[iterator].onmouseenter = (_) => {
      addStar(iterator);
    };
  }
  function addStar(iterator) {
    clearStar();
    for (let index = 0; index <= iterator; index++) {
      arr[index].classList.add("drop-shadow");
    }
  }

  function clearStar() {
    for (let index = 0; index < arr.length; index++) {
      arr[index].classList.remove("drop-shadow");
    }
  }
}
starsleave(star_box_1);
starsleave(star_box_2);
starsleave(star_box_3);

function starsleave(arr) {
  for (const iterator in arr) {
    arr[iterator].onmouseout = (_) => {
      clearStar();
    };
  }
  function clearStar() {
    for (let index = 0; index < arr.length; index++) {
      arr[index].classList.remove("drop-shadow");
    }
  }
}

// js for subscribe section
const section_subscribe = document.querySelector("section.subscribe"),
  header_content_section_subscribe = document.querySelector(
    "section.subscribe .header_content"
  );
window.addEventListener("scroll", (e) => {
  let section_subscribe_offset = section_subscribe.offsetTop;
  if (scrollY >= section_subscribe_offset - 400) {
    header_content_section_subscribe.classList.add("transform_header_text");
  }
});
let btnSend = document.querySelector(`#sendEmail`);
let email_input = document.querySelector(`[type="email"]`);
let span_handler = document.querySelector(`.Email_handelar`);
btnSend.addEventListener("click", (e) => {
  if (validateEmail(email_input.value)) {
    span_handler.innerText = `**The Email is valid`;
    span_handler.style.color = "#0f0";
    email_input.style.border = "solid 1px #0f0";
  } else {
    span_handler.innerText = `**The Email is invalid enter an email like "test@example.com"`;
    email_input.style.border = "solid 1px red";
  }
});
function validateEmail(email) {
  const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return emailPattern.test(email);
}
// js for footer

let date = document.querySelector("footer span");
let d = new Date();
date.innerText = d.getFullYear();
