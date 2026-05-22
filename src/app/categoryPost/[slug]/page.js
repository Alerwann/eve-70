'use client'
import * as React from 'react';

export default  function CategoryPage({params}){
const categoryName = React.use(params).slug;
console.log(categoryName)
return <main>
    {categoryName}
</main>
}