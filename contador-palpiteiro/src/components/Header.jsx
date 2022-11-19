const Header = ({ nomeGrupo, integrantes }) => {
  return (
    <>
      <h1> {nomeGrupo} </h1>
      <b> {integrantes} </b>
      <br />
      <br />
    </>
  );
};

export default Header;
