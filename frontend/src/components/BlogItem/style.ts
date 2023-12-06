import styled from 'styled-components';

export const BlogContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 400px;
    transition: all;
    transition-duration: 200ms;
    border-radius: 12px;
    word-break: break-all;
    @media (max-width: 1440px){
        max-width: 100%;
    }
    &:hover{
        box-shadow: 5px 5px 5px #181818;
    };
`;

export const BlogHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;
    background: ${({ theme: { colors } }) => colors.gray};
    border-radius: 8px 8px 0px 0px;
    font-size: large;
    padding: 16px 16px;
    text-align: left;
    font-size: x-large;
`;

export const BlogBody = styled.textarea`
    text-align: left;
    padding: 10px;
    background: #DDDDDD;
    min-height: 120px;
    height: 100%;
    resize: none;
`

export const BlogFooter = styled.div`
    color: white;
    background: ${({ theme: { colors } }) => colors.gray};
    font-size: medium;
    padding: 12px 16px;
    border-radius: 0px 0px 8px 8px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const KeywordBar = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
`

export const Keyword = styled.div`
    border-radius: 4px;
    background:  ${({ theme: { colors } }) => colors.lightGray};
    padding: 2px 4px;
`

export const ViewButton = styled.button`
    background:  ${({ theme: { colors } }) => colors.titan};
    border: none;
    border-radius: 4px;
    padding: 2px 4px;
    color: white;
    transition: all;
    transition-duration: 200ms;
    &:hover{
        background: ${({ theme: { colors } }) => colors.lightGray}
    }
`