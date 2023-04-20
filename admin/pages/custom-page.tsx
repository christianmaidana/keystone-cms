/** @jsxRuntime classic */
/** @jsx jsx */
import { PageContainer } from '@keystone-6/core/admin-ui/components';
import { jsx, Heading } from '@keystone-ui/core';
import { useState } from 'react';

export default function CustomPage() {
  const [data, setData] = useState('Hello World');
  const handleKeyDown = (event: any) => {
    if (event.key === 'Enter') {
      const { value } = event.target;
      fetch(`http://localhost:3000/rest/firestore/${value}`)
        .then((e) => e.json())
        .then((response) => {
          console.log(response);
          setData(JSON.stringify(response));
        });
    }
  }
  return (
    <PageContainer header={<Heading type="h3">Custom Page</Heading>}>
      <h1
        css={{
          width: '100%',
          textAlign: 'center',
        }}
      >
        Import Firestore Document from ContentId
      </h1>
      <div className="row">
      <p
        css={{
          textAlign: 'center',
        }}
      >
        ContentId:
      </p>
      </div>
      <div className="row">
      <input 
        css={{
            border: 'solid 1px #222',
            borderRadius: '0%',
            padding: '10px',
        }}
      type='text' name='contentID' onKeyDown={handleKeyDown}></input>
      </div>
      <div className="row">
      <textarea css={{
        marginTop: '10px',
        border: 'solid 1px #222',
        padding: '10px',
      }}
      
      cols="100" rows="10" name="fetchData" id="fetchData" value={data} readOnly></textarea>
      </div>
    </PageContainer>
  );
}