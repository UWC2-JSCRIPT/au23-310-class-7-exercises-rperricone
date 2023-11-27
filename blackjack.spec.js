describe('test for the blackJack Game',() =>{
    it('should calculate the score of a hand', () =>{
    const hand = [
     { displayVal: 'Six' , val: 6, suit: 'hearts'},
     { displayVal: 'Seven' , val: 7, suit: 'hearts'},    
   ]
    
   const result = calcPoints(hand)

   expect(result.total).toEqual(13)
   expect(result.isSoft).toEqual(false)
    })
})

