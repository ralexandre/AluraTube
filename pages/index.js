import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu";
import {StyledTimeline} from "../src/components/Timeline";

function HomePage() {
  const mensagem = "Bem vindo ao AluraTube!";
  const estiloDaOmePage = { 
    //backgroundColor: "red" 
};
  return (
    <>
    <CSSReset/>
    <div style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
                // backgroundColor: "red",
            }}>
      <Menu/>
      <Header />
      <Timeline playlists={config.playlists} />
      <Favoritos favoritos={config.favoritos}/>
    </div>
    </>
  );
}

export default HomePage;

const StyleFavorito = styled.div`
    img {
        width: 80px;
        height: 80px;
        border-radius: 50%;        
    }
    .favorito{
        display: inline-block;
        margin: 10px;
    }
`;

const StyledHeader = styled.div`
  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
  .user-info {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 16px 32px;
    gap: 16px;
  }
  .banner{
    width: 100%;
    height: 200px;
    text-align: center;
    background-image: url("https://img.youtube.com/vi/QsqatJxAUtk/hqdefault.jpg");
  }
`;
function Header() {
  return (
    <StyledHeader>
      <div className="banner">Teste</div>
      <section className="user-info">
        <img src={`https://github.com/${config.github}.png`} />
        <div>
          <h2>{config.name}</h2>
          <p>{config.job}</p>
        </div>
      </section>
    </StyledHeader>
  );
}
function Favoritos(props){
    const favorito = Object.keys(props.favoritos);
    //console.log(props.favoritos);
    return (
        <section>
            <h2>Favoritos</h2>
            <StyleFavorito>
                {       
                        favorito.map((fav)=>{  
                            const dado = props.favoritos[fav];
                            return (
                                <a className="favorito">
                                    <img src={dado.thumb} />
                                    <p>{dado.name} </p>
                                </a>
                            );                      
                        })
                    };            
            </StyleFavorito>
        </section>
    );
}

function Timeline(props) {
    const playlistNames = Object.keys(props.playlists);
    //statement y retorno por expressão
    return (
      <StyledTimeline>
        {
        playlistNames.map((playlistName) => {
          const videos = props.playlists[playlistName];
          return (
            <section>
              <h2>{playlistName}</h2>
              <div>
                {videos.map((video) => {
                  return (
                    <a href={video.url}>
                      <img src={video.thumb} />
                      <span>{video.title}</span>
                    </a>
                  );
                })}
              </div>
            </section>
          );
        })}
        ;
      </StyledTimeline>
    );
  }