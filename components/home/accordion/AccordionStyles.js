import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Card, Title as title } from '../feature/FeatureStyles';

export const Accordion = styled(Card)`
  text-align: center;

  @media only screen and (max-width: 34.375em) {
    padding: 5rem 0;
  }
`;

export const Wrapper = styled.div`
  font-size: 2.6rem;
  font-weight: 400;

  @media only screen and (max-width: 59.375em) {
    font-size: 2rem;
  }

  @media only screen and (max-width: 34.375em) {
    font-size: 1.8rem;
  }
`;

export const Title = styled(title)``;

export const ItemContainer = styled.ul`
  max-width: 81.5rem;
  margin: 2.25rem auto;
  list-style: none;
  padding: 0;

  @media only screen and (min-width: 34.375em) {
    width: 90%;
    margin: 3rem auto;
  }

  @media only screen and (min-width: 59.375em) {
    width: 75%;
    margin: 5.2rem auto;
  }
`;

export const Item = styled.li`
  margin-bottom: 0.8rem;
`;

export const Question = styled.button`
  color: inherit;
  display: block;
  text-align: left;
  background: #303030;
  padding: 0.8em 2.2em 0.8em 1.2em;
  margin-bottom: 1px;
  font-weight: 400;
  position: relative;
  width: 100%;
  border: 0;
  line-height: 1.3;
  cursor: pointer;
`;

export const Icon = styled(motion.div)`
  position: absolute;
  right: 1em;
  top: 35%;
  transform: translateY(-50%);
  height: 1em;
  width: 1em;
  fill: #fff;
`;

export const Answer = styled(motion.div)`
  display: block;
  text-align: left;
  background: #303030;
  overflow: hidden;
  span {
    display: inline-block;
    padding: 1.2em;
    font-size: inherit;
    white-space: pre-wrap;
    line-height: 1.3;
  }
`;
