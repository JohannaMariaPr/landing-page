import MyPlantsItem from "./MyPlantsItem.jsx";

export default function MyPlantsList({ reviews, setReviews }) {
  if (reviews.length === 0) {
    return <p>No reviews found.</p>;
  }

  // Delete function 
  function deleteReview(id) {
  const isConfirmed = window.confirm("Are you sure you want to delete this review?");
  if (isConfirmed) {
    setReviews(reviews.filter(review => review.id !== id));
    }
}

  return (
    <div className="plant-grid">
      {reviews.map((review) => (
        <MyPlantsItem key={review.id} review={review} deleteHandler={deleteReview}/>
      ))}
    </div>
  );
}
