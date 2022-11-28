import React from "react";
import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";

const Modal = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  border-radius: var(--character-card-border-radius);
  z-index: 3;
  background-color: var(--character-modal-background);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h4 {
    font-size: 1.4em;
  }
  button {
    padding: 5px 15px;
  }
`;

function CharacterModal({ id, setModal }) {
  const handleModal = () => {
    setModal((prev) => !prev);
  };
  const headers = {
    Accept: "application/json",
    Authorization: "Bearer prXVkao8sk4ZbZaueyKy",
  };
  const { isLoading, error, data } = useQuery({
    queryFn: () =>
      fetch(`https://the-one-api.dev/v2/character/${id}/quote`, {
        headers: headers,
      }).then((res) => res.json()),
  });

  return (
    <Modal>
      {isLoading && <div>Loading Quote</div>}
      {error && <div>{error.message}</div>}
      {data?.docs[0] ? (
        <div>{data.docs[0]}</div>
      ) : (
        <h4>quote is not available</h4>
      )}
      <div>
        <br />
        <button onClick={handleModal}>Close</button>
      </div>
    </Modal>
  );
}

export default CharacterModal;
