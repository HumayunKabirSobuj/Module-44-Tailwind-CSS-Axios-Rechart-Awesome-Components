import PriceOption from "./PriceOption";


const PriceOptions = () => {
    const priceOptions = [
        {
            "id": 1,
            "name": "Starter",
            "price": "$29.99/month",
            "features": [
                "Access to cardio equipment",
                "Access to weightlifting area"
            ]
        },
        {
            "id": 2,
            "name": "Regular",
            "price": "$49.99/month",
            "features": [
                "Access to cardio equipment",
                "Access to weightlifting area",
                "Access to group fitness classes"
            ]
        },
        {
            "id": 3,
            "name": "Premium",
            "price": "$79.99/month",
            "features": [
                "Access to cardio equipment",
                "Access to weightlifting area",
                "Access to group fitness classes",
                "Personal training session (1/month)",
                "Access to sauna and steam room"
            ]
        }
    ];

    return (
        <div className="">

            <h2 className="text-4xl">Best Prices In The Town</h2>
            <div className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-12">
                {
                    priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
                }
            </div>

        </div>
    );
};

export default PriceOptions;