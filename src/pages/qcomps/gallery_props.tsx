import { GalleryProps } from "@/types/gallery";
import { ListItemProps } from "@/types/listItem";

// ListItem Component
function ListItem({ label, content }: ListItemProps): JSX.Element {
  return (
    <li>
      <b>{label}</b>
      {content}
    </li>
  );
}

// Profile Component
function Profile({ scientist, size = 100 }: GalleryProps) {
  return (
    <section className="profile">
      <h2>{scientist.name}</h2>
      <img
        className="avatar"
        src={scientist.imageId}
        alt={scientist.name}
        width={size}
        height={size}
      />
      <ul>
        <ListItem label="Profession: " content={scientist.profession} />
        <ListItem label="Awards: " content={scientist.awards} />
        <ListItem label="Discovery: " content={scientist.discovery} />
      </ul>
    </section>
  );
}

// Gallery Component
export default function Gallery() {
  const scientists = [
    {
      name: "Maria Skłodowska-Curie",
      imageId: "https://i.imgur.com/szV5sdGs.jpg",
      profession: "Physicist and Chemist",
      awards: ("Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal"),
      discovery: "Polonium (element)",
    },
    {
      name: "Katsuko Saruhashi",
      imageId: "https://i.imgur.com/YfeOqp2s.jpg",
      profession: "Geochemist",
      awards: ("Miyake Prize for Geochemistry, Tanaka Prize"),
      discovery: "A method for measuring carbon dioxide in seawater",
    },
  ];

  return (
    <div>
      <h1>Notable Scientists</h1>
      {scientists.map((scientist, index) => (
        <Profile key={index} scientist={scientist} size={100} />
      ))}
    </div>
  );
}


/* export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <section className="profile">
        <h2>Maria Skłodowska-Curie</h2>
        <img
          className="avatar"
          src='https://i.imgur.com/szV5sdGs.jpg'
          alt="Maria Skłodowska-Curie"
          width={70}
          height={70}
        />
        
        <ul>
          <li>
            <b>Profession: </b>
            physicist and chemist
          </li>
          <li>
            <b>Awards: 4 </b>
            (Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)
          </li>
          <li>
            <b>Discovered: </b>
            polonium (element)
          </li>
        </ul>
      </section>
      <section className="profile">
        <h2>Katsuko Saruhashi</h2>
        <img
          className="avatar"
          src='https://i.imgur.com/YfeOqp2s.jpg'
          alt="Katsuko Saruhashi"
          width={70}
          height={70}
        />
        <ul>
          <li>
            <b>Profession: </b>
            geochemist
          </li>
          <li>
            <b>Awards: 2 </b>
            (Miyake Prize for geochemistry, Tanaka Prize)
          </li>
          <li>
            <b>Discovered: </b>
            a method for measuring carbon dioxide in seawater
          </li>
        </ul>
      </section>
    </div>
  );
} */
