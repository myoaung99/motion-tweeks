interface Props {
  children: React.ReactNode;
}
const SectionWrap = ({ children }: Props) => {
  return <div className="p-6">{children}</div>;
};

export default SectionWrap;
