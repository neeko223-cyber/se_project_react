import "./Profile.css";
import ClothesSection from "../ClothesSection/ClothesSection";
import SideBar from "../SideBar/SideBar";

export default function Profile({
  clothingItems,
  handleCardClick,
  handleAddClick,
  onCardLike,
  onSignOut,
  onEditProfileClick,
}) {
  return (
    <section className="profile">
      <SideBar
        onSignOut={onSignOut}
        onEditProfileClick={onEditProfileClick}
      />
      <ClothesSection
        clothingItems={clothingItems}
        handleCardClick={handleCardClick}
        handleAddClick={handleAddClick}
        onCardLike={onCardLike}
      />
    </section>
  );
}
