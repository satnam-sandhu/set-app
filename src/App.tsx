import { Box, SimpleGrid } from "@chakra-ui/react";
import "./App.css";
import Banner from "./components/banner";
import Tile from "./components/tile";

const data = [
  {
    createdAt: new Date(),
    url: "https://i0.wp.com/www.thewrap.com/wp-content/uploads/2022/02/top-gun.jpg?w=1200&ssl=1",
    title: "Top Gun",
    description:
      "After losing his friend, top pilot Maverick is given a second chance to redeem himself. He struggles to be at his best and also gets romantically involved with his civilian instructor Charlie.",
  },
  {
    url: "https://m.media-amazon.com/images/S/pv-target-images/5099b0bb5c1a20bc2f43fe3a4934c94412c842a595deb5220d70a7ee959aae29.jpg",
    title: "Top Gun: Maverick",
    description:
      "Thirty years of service leads Maverick to train a group of elite TOPGUN graduates to prepare for a high-profile mission while Maverick battles his past demons.",
  },
  {
    url: "https://images.immediate.co.uk/production/volatile/sites/3/2018/11/Worthington-Saldana-2-d9b924b.jpg?quality=90&crop=470px,0px,2585px,1722px&resize=980,654",
    title: "Avatar",
    description:
      "Avatar is an American media franchise created by James Cameron. It centers on a series of epic science fiction films produced by Lightstorm Entertainment and distributed by 20th Century Studios, and consists of associated merchandise, video games, and theme park attractions.",
  },
  {
    url: "https://statcdn.fandango.com/MPX/image/NBCU_Fandango/823/1019/thumb_D5A66832-6380-46EE-9783-90F929DB4BAE.jpg",
    title: "Talk to Me",
    description:
      "When a group of friends discover how to conjure spirits with an embalmed hand, they become hooked on the new thrill and high-stakes party game -- until one of them goes too far and unleashes terrifying supernatural forces.",
  },
  {
    title: "Poor Things",
    description:
      "Brought back to life by an unorthodox scientist, a young woman runs off with a lawyer on a whirlwind adventure across the continents. Free from the prejudices of her times, she grows steadfast in her purpose to stand for equality and liberation.",
    url: "https://m.media-amazon.com/images/M/MV5BNjM3ZmZkOGQtZTliMC00ZTcyLTk1YjMtNzhmYmEwZDVhMWZkXkEyXkFqcGdeQWFybm8@._V1_.jpg",
  },
  {
    title: "Pirates of the Caribbean: The Curse of the Black Pearl",
    description:
      "Captain Jack Sparrow arrives at Port Royal in the Caribbean without a ship or crew. His timing is inopportune, however, because later that evening the town is besieged by a pirate ship.",
    url: "https://static1.srcdn.com/wordpress/wp-content/uploads/2021/09/Pirates-of-the-Caribbean-6-cant-kill-off-Jack-sparrow-Barbossa-Davy-jones.jpg",
  },
  {
    title: "Fight Club",
    description:
      "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.",
    url: "https://media.newyorker.com/photos/5dbafcc91b4a6700085a7a9b/master/pass/Baker-FightClub.jpg",
  },
  {
    title: "The Dark Knight",
    description:
      "When the menace known as The Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    url: "https://cdn.vox-cdn.com/thumbor/K1WKyMb31K-K1vvseGAyFsjfYYE=/0x0:1200x675/1200x800/filters:focal(478x31:670x223)/cdn.vox-cdn.com/uploads/chorus_image/image/60384393/0_c9S8ajFBpwX89ZuU.0.jpeg",
  },
  {
    title: "Superbad",
    description:
      "Two co-dependent high school seniors are forced to deal with separation anxiety after their plan to stage a booze-soaked party goes awry.",
    url: "https://media.vanityfair.com/photos/62fa88ecd703349a746d4ea2/1:1/w_1333,h_1333,c_limit/vf-822-superbad-making-of-005.jpg",
  },
  {
    title: "Ghost Busters",
    description:
      "Three former parapsychology professors set up shop as a unique ghost removal service.",
    url: "https://i.insider.com/65f477333037f8e81750d090?width=1000",
  },
  {
    title: "Tenet",
    description:
      "Armed with only one word, Tenet, and fighting for the survival of the entire world, a Protagonist journeys through a twilight world of international espionage on a mission that will unfold in something beyond real time.",
    url: "https://images.immediate.co.uk/production/volatile/sites/3/2020/08/Tenet-JDW-76866a5-scaled.jpg?quality=90&resize=980,654",
  },
];

function App() {
  return (
    <>
      <Banner data={data} />
      <Box margin={25}>
        <SimpleGrid spacing={5} columns={[2, 3, 4, 5, 7]}>
          {data.map((item, index) => (
            <Tile key={index} item={item} />
          ))}
        </SimpleGrid>
      </Box>
    </>
  );
}

export default App;
