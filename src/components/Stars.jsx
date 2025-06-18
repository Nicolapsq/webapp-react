import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";

export default function Stars({vote}) {
  const voteStar = [];

  for (let i = 1; i <= 5; i++) {
    if (i <= vote) {
      voteStar.push(<FontAwesomeIcon key={i} icon={solidStar} />);
    } else {
      voteStar.push(<FontAwesomeIcon key={i} icon={regularStar} />);
    }
  }
  return <span>{voteStar}</span>;
}
