import { useRecoilState } from "recoil";
import { isKoreaState } from "./isKoreaState";

export const useIsKorea = () => {
  const [isKorea, setIsKorea] = useRecoilState(isKoreaState);

  return { isKorea, setIsKorea };
};
