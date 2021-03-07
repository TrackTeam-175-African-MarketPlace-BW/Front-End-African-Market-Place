import React from 'react'
// import axios from 'axios'
import styled from 'styled-components'

const TeamInfo = () => {
    // const fetchIsmail = () => {
    //     axios.get("https://api.github.com/users/ialkamal")
    //     .then(res => {
    //         setMember(res.data)
    //         console.log(res)
    //     })
    //     .catch(err => console.log(err))
    // }

    // const fetchVictoria = () => {
    //     axios.get("https://api.github.com/users/victoriatrac")
    //     .then(res => {
    //         setMember(res.data)
    //     })
    // }

    // axios.get("https://api.github.com/users/sarahrosecooper")
    // .then(res => {
    //     const sarah = res.data
    // })

    // axios.get("https://api.github.com/users/ChadDiaz")
    // .then(res => {
    //     const chad = res.data
    // })

    // useEffect(fetchIsmail, [])
    // useEffect(fetchVictoria, [])

    const H2 = styled.h2`
        margin-block-end: 1.5rem
    `

    const Info = styled.div`
        margin-top: 2rem;
    `

    const Cards = styled.div`
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        align-content: center;
        width: 100%;
    `

    const Card = styled.div`
        width: 40%;
        padding: 5%;
        text-align: center;
    `

    const Image = styled.img`
        border-radius: 50%;
        width: 20rem;
    `

    const CardMaker = (props) => {
        return(
            <Card>
                <Image src={props.avatar_url} />
                <h3>{props.name}</h3>
                <list>
                    <ul><b>Location:</b> {props.location}</ul>
                    <ul><b>Lambda Unit:</b> {props.unit}</ul>
                    <ul><b>Company:</b> {props.company}</ul>
                    <ul><b>Bio:</b> {props.bio}</ul>
                    <ul><b>GitHub:</b> <a href={props.git}>{props.git}</a></ul>
                    <ul><b>Project Role:</b> {props.role}</ul>
                </list>
            </Card>
        )
    }

    return (
        <Info>
            <div className="flexCard">
                <H2>Build Week Track Team 175</H2>
                <Cards>
                    <CardMaker
                        avatar_url = "https://avatars.githubusercontent.com/u/5246983?v=4"
                        name = "Ismail Al Kamal"
                        location = "Jeddah, Saudi Arabia"
                        unit = "4"
                        company = "Nawatt"
                        bio = "Enterprise solutions architect, Edtech enthusiast. B2B Startup founder, advisor and investor."
                        git = "https://api.github.com/users/ialkamal"
                        role = "Back end"
                    />
                    <CardMaker
                        avatar_url = "https://avatars.githubusercontent.com/u/68089778?v=4"
                        name = "Sarah Rose Cooper"
                        location = "Ohio"
                        unit = "3"
                        company = ""
                        bio = "Developer in progress"
                        git = "https://github.com/sarahrosecooper"
                        role = "Front end"
                    />
                    <CardMaker
                        avatar_url = "https://avatars.githubusercontent.com/u/65981909?v=4"
                        name = "Chad Diaz"
                        location = ""
                        unit = "3"
                        company = ""
                        bio = "Learning new languages in Lambda School."
                        git = "https://github.com/ChadDiaz"
                        role = "Front end"
                    />
                    <CardMaker
                        avatar_url = "https://avatars.githubusercontent.com/u/9617050?v=4"
                        name = 	"Victoria Trac"
                        location = "Denver, CO"
                        unit = "2"
                        company = "Denver Packaging Company"
                        bio = "Budding developer out of Denver."
                        git = "https://github.com/victoriatrac"
                        role = "Front end"
                    />
                </Cards>
            </div>
        </Info>
    )
}

export default TeamInfo
