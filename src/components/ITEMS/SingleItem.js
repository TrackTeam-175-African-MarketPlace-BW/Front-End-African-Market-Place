import React from 'react'
import { useHistory} from 'react-router-dom';
import { connect } from 'react-redux'
import styled from 'styled-components';



const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* margin: 0 auto; */
`;

const StyledH3 = styled.h3`
  font-size: 20px;
`;
const StyledH4 = styled.h4`
  font-size: 16px;
`;

const SingleItem = (props) => {
  const { push } = useHistory();
  return (
      <>
      <StyledDiv>
        <StyledH3>{props.item.name}</StyledH3>
        <StyledH4>{props.item.description}</StyledH4>
        <StyledH4>{props.item.market}</StyledH4>
        <StyledH4>{props.item.country}</StyledH4>
        <StyledH4>{props.item.price}</StyledH4>
        <StyledH4>{props.item.owner}</StyledH4>
        <StyledH4>{props.item.price}</StyledH4>
      </StyledDiv>
      <button onClick={() => {push(`/editItem/${props.items.id}`)}}>Edit Item</button>
      </>
    );
}

const mapStateToProps = (state) => {
    return {
      item: state.SIR.selectedItem,
      items: state.IRS.item
    }
}

export default connect(mapStateToProps, {})(SingleItem);
