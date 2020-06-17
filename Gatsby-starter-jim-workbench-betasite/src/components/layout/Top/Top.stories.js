import React from 'react';
import Top from './Top';
import{withKnobs,text } from "@storybook/addon-knobs";

export default {
    title: 'Top',
    decorators: [withKnobs]
};

export const standard = () => <Top            
    siteTitle={text("siteTitle","")}    
/>;