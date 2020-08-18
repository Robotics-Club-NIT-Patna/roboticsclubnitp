import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css'],
})
export class EventComponent implements OnInit {
  constructor() {}
  events = [
    {
      title: `Arduino workshop`,
      url: `assets/img/arduino.JPG`,
      description: `Robotics club NIT-Patna conducted a two days Arduino workshop
                  where all about Arduino, Bluetooth interfacing, and Bot
                  interfacing were discussed. The major highlights of this
                  workshop were that the free kits were provided to the
                  participants using which they learned how to control bots
                  using Arduino. A demonstration of how to assemble the bot
                  (using the components provided in the kit ) was given.
                  Participants had hands-on experience on tasks like LED
                  Blinking, buzzers, DC motor interfacing with Arduino,
                  Bluetooth modules and pairing, autonomous bot assembling,
                  wireless LED, building an obstacle detecting bot using IR
                  sensors, a line follower bot, and wirelessly controlled bot
                  using Android phone. After completion of the workshop,
                  certificates were provided to all the participants.`,
    },
    {
      title: `3D printing Workshop`,
      url: `assets/img/3dprinting.jpg`,
      description: `Robotics club, NIT Patna conducted a two days Workshop on 3D
                  printing. In the workshop basics of 3D designing were
                  discussed. The participants gained a sound knowledge about the
                  parts, principles, and working of 3D printing. They were given
                  access to use the 3D printer of our club to gather some ideas
                  about how to operate it, what are its specific features. It
                  was a great hands-on experience of creating stuff like
                  Robotics arm, gear, etc for all those who participated.`,
    },
    {
      title: `ROBOWARS`,
      url: `assets/img/robowars.jpg`,
      description: `We conducted robowars which was a big hit.Students of different schools and 
      colleges from patna participated.Robowars are probably among the most awaited events because 
      of the thrill and excitement it provides.We have all grown watching transformers and it gives quite a 
      similar feel.Robowars  had a history of attracting great audiences from different colleges over the years and it’s prize amount have always been the highest. Yesteryear,I was won by a Team from Nit Silchar.`,
    },
    {
      title: `CHAKRAVYUH`,
      url: `assets/img/chakravyuh.jpg`,
      description: `We had a maze solving event which was based on the backdrop of Abhimanyu’s chakravyuh from Mahabharata.The bot was supposed to be abhimanyu and it had to reach to centre of the maze(or chakravyuh) using its weapons i.e, the codes in this case.It attracted a lot of audience especially from the programming  background. The fascination factor was also there because of the interesting  backdrop .`,
    },
    {
      title: `THE LION’S KINGDOM `,
      url: `assets/img/lionkingdom.jpg`,
      description: `In lion’s Kingdom, participants had to traverse their bots through a zig zag path overcoming the obstacles.The path had holes which were meant to be filled using cubes placed along the path.This event saw maximum participation because of its straightforward demands and facile nature.`,
    },
  ];
  ngOnInit() {}
}
