using System.ComponentModel.DataAnnotations;

namespace Mission10_EmmaHelquist.Data;

// Class for teams
public class Team
{
    public int TeamID { get; set; }
    [Required]
    public string TeamName { get; set; }
    public int CaptainID { get; set; }
}