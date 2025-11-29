import FormContainer from "../components/FormContainer";
import FormHeader from "../components/FormHeader";
import SectionHeader from "../components/SectionHeader";
import SectionRow from "../components/SectionRow";
import GenderRow from "../components/GenderRow";

export default function PreviewForm() {
  return (
    <FormContainer>
      <FormHeader />

      <SectionHeader title="Part A: Personal Information" />

      <SectionRow number="1" label="Name" value="ANSHUL DHARMSHAKTU" />
      <GenderRow number="2" />
      <SectionRow
        number="3"
        label="Date of Birth"
        value="17/07/2000"
      />

      <SectionRow
        number="4"
        label="Aadhaar Number"
        value="1 2 3 4   5 6 7 8   6 7 8 9"
      />

      <SectionRow
        number="5"
        label="Residence Address"
        value="26/16 RAJNAGAR COLONY, DADA GHOSH BHAWAN SO, DELHI, 110008"
        noBorder
      />
    </FormContainer>
  );
}
