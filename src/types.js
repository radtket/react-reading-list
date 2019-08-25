import PropTypes from "prop-types";

export const PropTypesBook = PropTypes.shape({
  author: PropTypes.string,
  coverImageUrl: PropTypes.string,
  id: PropTypes.string,
  pageCount: PropTypes.number,
  publisher: PropTypes.string,
  synopsis: PropTypes.string,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
});
