import { Container } from "./styles";
import { useAuth } from "../../hooks/useAuth";
import VideoDescription from "../../components/VideoDescription";

export const Home = () => {
  const { isAuthenticated, user } = useAuth();

  const loggedHome = (
    <h1>
      Olá mundo,
      {user.nome}
    </h1>
  );

  return (
    <Container className="Home">
      <h2>Home</h2>
      <VideoDescription
        title="Growl at dogs in my sleep"
        description={"Where is it? i saw that bird i need to bring it home to mommy squirrel! "
        + "i love cats i am one wake up scratch humans leg for food then purr then "
        + "i have a and relax, soft kitty warm kitty little ball of furr cough hairball, "
        + "eat toilet paper so chew iPad power cord sit in a box for hours."}
        week="semana01"
        date="09/04/2022"
      />
      {isAuthenticated && loggedHome}
    </Container>
  );
};
