import { Button, TextField, Typography } from "@mui/material";

const FormCheckOut = ({price }) => {
  return (
    <>
      <div className="form-checkout-comp text-center flex flex-col gap-10   ">
        <Typography>Checkout</Typography>
        <form autoComplete="off" className="flex flex-col gap-10 ">
          <TextField
            id="card-number"
            label="Card Number"
            fullWidth
            variant="outlined"
            InputProps={{
              style: {
                borderRadius: "10px",
              },
            }}
          />
          <TextField
            fullWidth
            variant="outlined"
            id="card-holder-name"
            label="Card Holder Name"
            InputProps={{
              style: {
                borderRadius: "10px",
              },
            }}
          />
          <div className="flex gap-10">
            <TextField
              variant="outlined"
              id="Exp-Date"
              label="Exp. Date"
              InputProps={{
                style: {
                  borderRadius: "10px",
                },
              }}
            />
            <TextField
              variant="outlined"
              id="CVV"
              label="CVV"
              InputProps={{
                style: {
                  borderRadius: "10px",
                },
              }}
            />
          </div>
          <ul>
            <li className="flex justify-between">
              <span>Subtotal</span>
              <span> ${price}</span>
            </li>
            <li className="flex justify-between">
              <span>Shipping Cost</span>
              <span> $10</span>
            </li>
            <li className="flex justify-between">
              <span>Subtotal</span>
              <span> ${price+10}</span>
            </li>
          </ul>
          <Button
            variant="contained"
            size="large"
            type="submit"
            sx={{ borderRadius: "10px", color: "textGray" }}
          >
            Confirm
          </Button>
        </form>
      </div>
    </>
  );
};

export default FormCheckOut;
