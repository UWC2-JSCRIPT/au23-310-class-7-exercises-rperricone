describe('test for soccer game',() =>{
    it('should calculate total points function', () =>{
        const points = getTotalPoints('wwlwdd')
        expect(points).toEqual(11)
    })
    it('should test orderTeams', () =>{
     
        const teams = 
            { name: 'Sounders' , results: 'wwlwdd'}
          
        const teamName = orderTeams(teams) 
        //console.log(teamName)
         expect(teamName).toEqual('Sounders: 11')
    })
})