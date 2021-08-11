import PropTypes from 'prop-types';
import { SectionWrap, SectionTitle } from 'components/Section/Section.styled';

function Section({ title, children }) {
  return (
    <SectionWrap>
      <SectionTitle>{title}</SectionTitle>
      {children}
    </SectionWrap>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Section;
