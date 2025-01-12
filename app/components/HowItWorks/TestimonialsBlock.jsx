import React from "react";
import Image from "next/image";
import ava1 from "../../../public/msulanjaku.jpg";
import ava2 from "../../../public/SarahCappello.jpg";
import ava3 from "../../../public/Timmothy-Botsford.jpg";
import ava4 from "../../../public/AnjiLopez-1.jpg";
import ava5 from "../../../public/Archaimbau.jpg";
import ava6 from "../../../public/DanFuzzy.jpg";
import ava7 from "../../../public/Tina-Dala.jpg";
import ava8 from "../../../public/Kim-K.-Fan.jpg";
import ava9 from "../../../public/Svetlannnka.jpg";

const testimonialsData = [
  {
    avatar: ava1,
    name: "msulanjaku",
    platform: "AppStore",
    title: "Amazing meditation app",
    content:
      "I meditate daily, especially during the night before going to sleep and saw MeditationMantraSlowdive showing on my facebook feed. I was very impressed with how nice and clean the design is and just love all the features it offers. The only suggestion I would have for the developer and pointed out on other reviews, MeditationMantraSlowdive should offer a 7 day trial for people to see if this works for them.",
  },
  {
    avatar: ava2,
    name: "SarahCappello",
    platform: "AppStore",
    title: "Great and Interesting but I want more",
    content:
      "I’ve used this app a couple times now and I am interested in seeing where this app will grow. I am eager to see more guided meditations with more options (time, voices, areas of focus etc). There are both guided and non-guided meditations offered, but they tend to be generic and wide sweeping. For instance, the full body chakra meditation; there was only one voice that seemed slightly bionic and took me out of focus, the app didn’t offer additional individual chakra focuses to help me grow, and the voice mentioned genders based on uteruses and arousal which might trigger some people. What I like about this app over other meditative apps is this leans more “spiritual” rather then work and emotion focused. I would like to see this app support spiritual journeys.",
  },
  {
    avatar: ava3,
    name: "Timmothy Botsford",
    platform: "AppStore",
    title: "Nice app",
    content:
      "Good morning! I like Meditation Mantra Slowdive, for me it’s a good way to start the day with some nice meditation about loving yourself or something like that.🙏 Not sure if I want the chakra meditations, but maybe I’ll try.",
  },
  {
    avatar: ava4,
    name: "AnjiLopez",
    platform: "AppStore",
    title: "Wow",
    content:
      "It’s just my first day – I did it last night and this morning…. Not saying it’s magic but… I kinda think it is… I have been struggling to wake up and work out for approximately 3.5 months. To the point I’m just harboring stress about it. This morning I woke up no problems – went and had a great workout – then showered and did morning meditation… wow.",
  },
  {
    avatar: ava5,
    name: "Archaimbau Brunson",
    platform: "Google Play",
    title: "The variety of breathing exercises",
    content:
      "The variety of breathing exercises, each with different difficulty levels, ensures that you can always find something to match your needs and progress.",
  },
  {
    avatar: ava6,
    name: "DanFuzzy",
    platform: "Google Play",
    title: "Life-Changing Experience!",
    content:
      "Slowdive has transformed my daily meditation routine. The soothing mantras and guided sessions create a calming atmosphere that’s perfect for mindfulness.",
  },
  {
    avatar: ava7,
    name: "Tina Dala",
    platform: "Google Play",
    title: "Excellent",
    content:
      "I’m deeply impressed by Slowdive’s holistic approach to meditation. It not only addresses mental relaxation but also focuses on physical rejuvenation. Moreover, the app’s ability to track and motivate with analytics keeps me engaged and consistent in my practice.",
  },
  {
    avatar: ava8,
    name: "Kim K. Fan",
    platform: "AppStore",
    title: "It’ll change your life",
    content:
      "If you’re ready to make some positive life changes, MeditationMantraSlowdive is what you need. There’s a plethora of different meditations for different things that you’d like to focus on. The first time I used it, I about forgot where I was lol It does cost money, but invest in your own well-being and happiness.",
  },
  {
    avatar: ava9,
    name: "Svetlannnka!",
    platform: "AppStore",
    title: "The best meditation app I’ve seen",
    content:
      "Meditation Mantra Slowdive is awesome, new design is fabulous. It’s easy to use and it helps so much to establish meditation habit, incredible. I’ve been trying bunch of other apps in this space but I have never seen anything even close to this. Great product! Huge thanks to whoever created it, you rock 🤍",
  },
];

export default function TestimonialsBlock() {
  return (
    <div className="mt-[20px] flex flex-col gap-[20px] w-full max-w-[650px]">
      {testimonialsData.map((testimonial, index) => (
        <div
          key={index}
          className="flex flex-col sm:flex-row bg-[#2C2F33] text-white rounded-[21px] p-6 shadow-md">
          <Image
            src={testimonial.avatar}
            alt={testimonial.name}
            className="w-[80px] h-[80px] rounded-full object-cover mr-[20px]"
          />
          {/* Контент */}
          <div className="flex flex-col">
            <h3 className="text-lg font-bold mb-[20px]">{testimonial.title}</h3>
            <p className="text-[15px] font-thin mb-[50px]">
              {testimonial.content}
            </p>
            <div className="flex items-center">
              <div className="text-yellow-500 text-[16px] mr-[10px]">
                ⭐⭐⭐⭐⭐
              </div>
              <span className=" text-white text-[18px]">
                By {testimonial.name}, {testimonial.platform}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
