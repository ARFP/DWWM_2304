class Card 
{
    constructor(_cardFromJson) 
    {
        Object.assign(this, _cardFromJson);
    }
}

export { Card }