import React from 'react';
import ListItem from '../../../containers/listItem';
import Footer from '../../../components/footer';

export default function ProductPage (props)  {
    return(

        <div>
            <ListItem {...props}/>
            <Footer/>
        </div>
    )
}