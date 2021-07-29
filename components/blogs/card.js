import {
  Container,
  Content,
  Info,
  SmallInfo,
  Svg,
  Title,
  ReadMore,
  Description,
} from "./styles/card";
import Image from "next/image";

const Card = ({ image, likes, date, title, description, url, profile_url }) => {
  return (
    <Container>
      <div style={{ position: "relative", minHeight: "250px" }}>
        <a href={url} target="_blank" rel="noreferrer" >
          <Image
            style={{
              height: "100% !important",
              width: "100% !important",
              position: "relative",
            }}
            src={image}
            alt="Banner Image"
            layout="fill"
          />
        </a>
      </div>
      <Content>
        <Title>
          <a href={url}>
            <b>{title}</b>
          </a>
        </Title>
        <Info>
          <SmallInfo>
            <svg
              viewBox="0 0 64 64"
              xmlns="http://www.w3.org/2000/svg"
              height="15"
              width="15"
            >
              <g id="User">
                <path d="M41.2452,33.0349a16,16,0,1,0-18.49,0A26.0412,26.0412,0,0,0,4,58a2,2,0,0,0,2,2H58a2,2,0,0,0,2-2A26.0412,26.0412,0,0,0,41.2452,33.0349ZM20,20A12,12,0,1,1,32,32,12.0137,12.0137,0,0,1,20,20ZM8.09,56A22.0293,22.0293,0,0,1,30,36h4A22.0293,22.0293,0,0,1,55.91,56Z" />
              </g>
            </svg>
            By<a href="https://dev.to/abhishekjain35/"> abhishek</a>
          </SmallInfo>
          <SmallInfo>
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              height="15"
              width="15"
            >
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </Svg>
            {date}
          </SmallInfo>
          <SmallInfo>
            <Svg
              version="1.1"
              id="Icons"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 32 32"
              style={{ enableBackground: "new 0 0 32 32" }}
              xmlSpace="preserve"
              height="15"
              width="15"
            >
              <path
                className="st0"
                d="M11,24V14H5v12h6v-2.4l0,0c1.5,1.6,4.1,2.4,6.2,2.4h6.5c1.1,0,2.1-0.8,2.3-2l1.5-8.6c0.3-1.5-0.9-2.4-2.3-2.4
	H20V6.4C20,5.1,18.7,4,17.4,4h0C16.1,4,15,5.1,15,6.4v0c0,1.6-0.5,3.1-1.4,4.4L11,13.8"
              />
            </Svg>
            {likes}
          </SmallInfo>
        </Info>
        <Description>{description}</Description>
        <span>
          <ReadMore href={url}>
            <span>Read more</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              width="13"
              height="13"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </ReadMore>
        </span>
      </Content>
    </Container>
  );
};

export default Card;
