export function Greeting() {
    
        const  = currentHour = new Date().getHours();
        let image = nightImage;
        let text = 'Good night';

        if (currentHour >= 6 && currentHour < 12) {
            image = dayImage;
            text = 'Good Morning, Sunshine!';
        } else if (currentHour >= 12 && currentHour < 17) {
            image = dayImage;
            text = 'Good Afternoon';
        } else if (currentHour >= 17 && currentHour < 21) {
            image = eveningImage;
            text = 'Good Evening!';
        } else {
            image = nightImage;
            text = 'Good Night!';
        }
        return( 
        <h1 className="greeting">
            img src={image} alt="Time of day icon"/>
            {text}
    </h1>
    );
};