export default function Pagination({
  prev,
  currentPage,
  getPaginationGroup,
  next,
  pages,
  handleActive,
}) {
  return (
    <>
      <ul className='pagination justify-content-center'>
        {getPaginationGroup.length <= 0 ? null : (
          <li onClick={prev} className='next_link page-item'>
            {currentPage === 1 ? null : (
              <button className="page-link" type="button">
                <i className='fa fa-arrow-left' />
              </button>
            )}
          </li>
        )}

        {getPaginationGroup.map((item, index) => {
          return (
            <li
              onClick={() => handleActive(item)}
              key={index}
              className={
                currentPage === item ? "page-item active" : "page-item"
              }
            >
              <button className='page-link' type="button">{item}</button>
            </li>
          );
        })}

        {getPaginationGroup.length <= 0 ? null : (
          <li onClick={next} className='next_link page-item'>
            {currentPage >= pages ? null : (
              <button className="page-link" type="button">
                <i className='fa fa-arrow-right' />
              </button>
            )}
          </li>
        )}
      </ul>
    </>
  );
}
