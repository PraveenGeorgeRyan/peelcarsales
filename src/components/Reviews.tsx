import styles from "./Reviews.module.css";

const reviews = [
  { text: "Got my loan approved within 5 minutes. Best car buying experience. Must recommend to everyone looking for a vehicle.", name: "Om Sharma", via: "Google Review · Mississauga" },
  { text: "Looked at a car on Monday and by Thursday I was able to drive it home. Fast and efficient service, I would recommend anybody to get their car there!", name: "Jaspreet Singh", via: "Google Review · Brampton" },
  { text: "The service was excellent. Been to dealerships before but this was the best one so far. The team is very generous and takes the customer's word seriously.", name: "Akshit Chabba", via: "Google Review · Mississauga" },
  { text: "Great service, very good guiding and great value cars and deals. Staff is very generous. Special thanks to Inder bhaaji. Recommended to everyone.", name: "Harmandeep Singh", via: "Google Review · Oakville" },
  { text: "Excellent customer service from start to finish. Car was in excellent condition with clean CarFax. Very friendly and helpful throughout the whole process.", name: "Ranjit Singh", via: "Google Review · Mississauga" },
  { text: "I bought an Alfa Romeo and I can't say enough how much these guys helped me. Best place for car lovers. Will definitely recommend this place.", name: "Basir Mohammad", via: "Google Review · Brampton" },
];

export default function Reviews() {
  return (
    <section className={styles.reviews} id="reviews" aria-label="Customer reviews — Peel Car Sales Mississauga and Oakville">
      <div className={styles.header}>
        <div>
          <div className="section-eyebrow">Google reviews — used car dealership Mississauga &amp; Oakville</div>
          <h2 className="section-h2">
            4.9-Star Rated
            <br />
            Used Car Dealer
          </h2>
        </div>
        <div className={styles.ratingBlock}>
          <div className={styles.ratingNum}>4.9</div>
          <div className={styles.ratingStars}>&#9733;&#9733;&#9733;&#9733;&#9733;</div>
          <div className={styles.ratingCount}>200+ Google Reviews</div>
        </div>
      </div>

      <div className={styles.marqueeContainer}>
        <div className={styles.marqueeTrack}>
          {[...reviews, ...reviews].map((r, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.starsSmall}>&#9733;&#9733;&#9733;&#9733;&#9733;</div>
              <p className={styles.textBody}>&ldquo;{r.text}&rdquo;</p>
              <div className={styles.reviewerName}>{r.name}</div>
              <div className={styles.reviewerVia}>{r.via}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
