import React from 'react';

import streamThumbnail from '../../images/stream_thumbnail.jpg'

import { 
  List,
  StreamContainer,
  StreamThumbnail,
  StreamColumn,
  StreamRow,
  StreamHeader,
  StreamAvatar,
  StreamUserName,
  StreamDescription,
  StreamCategory,
  TagRow,
  TagView,
  TagText,
 } from './styles';

const StreamList: React.FC = () => {
  const StreamItem = () => (
    <StreamContainer>
      <StreamThumbnail source={streamThumbnail} />
      <StreamColumn>
        <StreamRow>
          <StreamHeader>
            <StreamAvatar />
            <StreamUserName numberOfLines={1}>nascimento.rapha</StreamUserName>
          </StreamHeader>

          <StreamDescription numberOfLines={1}>
            Front-end com React-Native e back-end com NodeJS
          </StreamDescription>

          <StreamCategory numberOfLines={1}>
            Sciente & Technology
          </StreamCategory>
        </StreamRow>

        <TagRow>
          <TagView>
            <TagText>Portuguese</TagText>
          </TagView>
          <TagView>
            <TagText>Web Development</TagText>
          </TagView>
        </TagRow>
      </StreamColumn>

    </StreamContainer>
  )
  
  return (
      <List>
        <StreamItem />
        <StreamItem />
        <StreamItem />
        <StreamItem />

      </List>
  );
};

export default StreamList;
