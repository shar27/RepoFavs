import RepoList from '../components/RepoList'
import {render, screen, act} from '@testing-library/react'
import { renderHook } from '@testing-library/react-hooks'

import '@testing-library/jest-dom/extend-expect'

describe("Repo list", ()=> {
    it("loads data", async () => {
        global.fetch = jest.fn();

        await act(async () => renderHook(()=> RepoList(("items"))));
        
        expect(global.fetch).toBeCalledWith(
            "https://api.github.com/search/repositories?q=created:%3E2017-01-10&sort=stars&order=desc"
        );
    });
});
