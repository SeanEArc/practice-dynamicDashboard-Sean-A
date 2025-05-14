
const PremiumUser = () => {
    let PremiumStatus = true;
    let PremiumText;
    if (PremiumStatus) {
        PremiumText = "Thank you for being a premium member!";
    } else {
        PremiumText = "Upgrade to premium to enjoy exclusive features!";
    }

    return (
        <div>
            <p>{PremiumText}</p>
        </div>
    )
}

export default PremiumUser;