import React from "react"
import styled from "styled-components"
import { CypherTheme } from "styles/ColorStyles"
import { Body3, Header2 } from "styles/TextStyles"
import meru from "assets/images/merunew.png"
import pdf from "assets/pdf/meru-36.pdf"
const NFTBottom = () => {
  return (
    <Body>
      <Cover>
        {" "}
        <SecondRow>
          <SecondRowLeft>
            <GridTitle>Own the NFT?</GridTitle>
            <RowText>
              Connect your wallet to download your PDF copy of the book. Use the
              NFT to order a copy of the Meru-36 limited edition paperback
            </RowText>
            <Buttons>
              <DiscordButton
                href="https://discord.gg/hJmfsEYCqE"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p>ORDER YOUR COPY</p>
              </DiscordButton>{" "}
              <TwitterButton href={pdf} rel="noopener noreferrer" download>
                <p>DOWNLOAD PDF </p>
              </TwitterButton>
            </Buttons>{" "}
          </SecondRowLeft>
          <SecondRowRight>
            <GridImage src={meru} alt="about cypherverse" />
          </SecondRowRight>
        </SecondRow>
      </Cover>
    </Body>
  )
}
const Body = styled.div`
  margin: 40px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background: ${CypherTheme.primary};
  height: 100%;
  padding: 16px;
`

const Cover = styled.div`
  max-width: 1312px;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  img {
    max-height: 653px;
    min-height: 250px;
    height: 100%;
    width: 100%;
    max-width: 1312px;
    object-fit: contain;
  }
`
const GridImage = styled.img`
  min-height: 250px;
  max-height: 744px;
  height: 100%;
  max-width: 520px;
  width: 100%;
  /* object-fit: cover; */
`

const GridTitle = styled(Header2)`
  color: ${CypherTheme.white};
  margin: 8px 0;
  text-align: left;
`

const RowText = styled(Body3)`
  margin: 16px 0;
  color: ${CypherTheme.white};

  ul {
    display: flex;
    flex-direction: column;
    margin: 8px 0 0 16px;
    li {
      list-style-type: disc;
      margin: 2px 0;
    }
  }
`
const SecondRow = styled.div`
  display: grid;
  max-width: 1300px;
  width: 100%;
  grid-gap: 40px;
  gap: 40px;
  grid-template-areas: "SecondLeft SecondRight";
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-content: center;
  margin: 64px auto;
  @media only screen and (max-width: 750px) {
    grid-template-columns: repeat(1, 1fr);
    grid-template-areas:
      "SecondRight"
      "SecondLeft";
    margin: 16px auto;
  }
`
const SecondRowLeft = styled.div`
  grid-area: SecondLeft;
`
const SecondRowRight = styled.div`
  grid-area: SecondRight;
`

const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  margin: 40px 0;
  width: 100%;
  @media only screen and (max-width: 550px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`
const DiscordButton = styled.a`
  height: 58px;
  width: 190px;
  background: ${CypherTheme.white};
  outline: none;
  transition: 0.4s cubic-bezier(0.12, 0.73, 0.92, 0.34);
  border-radius: 0px;
  color: ${CypherTheme.primary};
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  line-height: 1.2;
  :hover {
    opacity: 0.9;
    transform: scale(1.02);
  }

  p {
    margin: 0;
    font-family: "Atures";
    font-size: 18px;

    @media only screen and (max-width: 650px) {
      font-size: 16px;
    }
  }
`
const TwitterButton = styled.a`
  height: 58px;
  width: 190px;
  background: ${CypherTheme.primary};
  border: 1px solid ${CypherTheme.white};
  outline: none;
  transition: 0.4s cubic-bezier(0.12, 0.73, 0.92, 0.34);
  border-radius: 0px;
  color: ${CypherTheme.white};
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 0 0 0 40px;
  line-height: 1.2;
  :hover {
    opacity: 0.9;
    transform: scale(1.02);
  }

  p {
    margin: 0;
    font-family: "Atures";
    font-size: 18px;

    @media only screen and (max-width: 650px) {
      font-size: 16px;
    }
  }

  @media only screen and (max-width: 650px) {
    margin: 16px 0;
  }
`
export default NFTBottom
