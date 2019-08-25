import PropTypes from "prop-types";

export const PropTypesBook = PropTypes.shape({
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  author: PropTypes.string,
  coverImageUrl: PropTypes.string,
  id: PropTypes.string,
  pageCount: PropTypes.number,
  publisher: PropTypes.string,
  synopsis: PropTypes.string,
});
