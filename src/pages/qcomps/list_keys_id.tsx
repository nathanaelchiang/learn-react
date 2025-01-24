export const people = [
  {
    id: 0,
    name: 'Creola Katherine Johnson',
    profession: 'Mathematician',
    accomplishment: 'Spaceflight calculations',
    imageId: 'szV5sdG',
  },
  {
    id: 1,
    name: 'Mario José Molina-Pasquel Henríquez',
    profession: 'Chemist',
    accomplishment: 'Discovery of Arctic ozone hole',
    imageId: 'YfeOqp2',
  },
];

function getImageUrl(imageId: string): string {
  return `https://i.imgur.com/${imageId}s.jpg`;
}

export default function List() {
  const listItems = people.map((person) => (
    <li key={person.id} className="profile">
      <img
        src={getImageUrl(person.imageId)}
        alt={`Image of ${person.name}`}
        width={70}
        height={70}
        className="avatar"
      />
      <div className="details">
        <h3>{person.name}</h3>
        <p>
          <strong>Profession:</strong> {person.profession}
        </p>
        <p>
          <strong>Accomplishment:</strong> {person.accomplishment}
        </p>
      </div>
    </li>
  ));

  return <ul className="profiles">{listItems}</ul>;
}
