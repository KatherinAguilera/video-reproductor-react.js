import React from 'react';

function HomeLayout(props) {
  return (
    <section>
      {/* traer las pro[iedades hijas */}
      {props.children}
    </section>
  )
}

export default HomeLayout