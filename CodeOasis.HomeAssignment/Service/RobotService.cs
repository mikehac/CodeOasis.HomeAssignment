namespace CodeOasis.HomeAssignment.Service
{
    public class RobotService : IRobotService
    {
        public int[] TrackRobot(string[] movements)
        {
            if (!IsValidInput(movements))
                throw new ArgumentException("The input is invalid");

            Dictionary<string, int> parsedMovement = new Dictionary<string, int>();
            foreach (var movement in movements)
            {
                string[] singleMove = movement.Split(' ');
                if (!parsedMovement.ContainsKey(singleMove[0]))
                {
                    parsedMovement[singleMove[0]] = int.Parse(singleMove[1]);
                }
                else
                {
                    parsedMovement[singleMove[0]] += int.Parse(singleMove[1]);
                }
            }
            int right = parsedMovement.GetValueForMove<string, int>("right");
            int left = parsedMovement.GetValueForMove<string, int>("left");
            int up = parsedMovement.GetValueForMove<string, int>("up");
            int down = parsedMovement.GetValueForMove<string, int>("down");

            int horizontal = right - left;
            int vertical = up - down;
            return new int[] { horizontal, vertical };
        }

        private bool IsValidInput(string[] movements)
        {
            string[] instructions = new string[] { "left", "right", "up", "down" };
            var splited = movements.Select(x => new
            {
                key = x.Split(' ')[0],
                value = x.Split(' ')[1]
            });

            if (splited.Any(x => (!instructions.Contains(x.key) || int.Parse(x.value) < 0)))
                return false;

            return true;
        }
    }
}
