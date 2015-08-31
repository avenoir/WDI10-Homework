def lines
  {
    :n => [ "Times Square", "34th", "28th", "23rd", "Union Square", "8th" ],
    :l => [ "8th", "6th", "Union Square", "3rd", "1st" ],
    :"6" => [ "Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place" ],
  }
end

def travel( start_line, start_stop, end_line, end_stop )
  trip = []

  if start_line.to_s == end_line.to_s # Same Line
    indexStart = lines[start_line].index(start_stop)
    indexEnd = lines[end_line].index(end_stop)

    lines[start_line][indexStart..indexEnd].each do |stop|
      trip << stop
    end

    print trip.join(" ")
    print "Total of #{ trip.length } stops"
  else # Different Line
    second_trip = []

    indexStart = lines[start_line].index(start_stop)
    indexEnd = lines[start_line].index("Union Square")

    indexStartSecond = lines[end_line].index("Union Square")
    indexEndSecond = lines[end_line].index(end_stop)

    lines[start_line][indexStart..indexEnd].each do |stop|
      trip << stop
    end

    lines[end_line][indexStartSecond..indexEndSecond].each do |stop|
      second_trip << stop
    end

    print trip.join(" ")
    print " | Change at Union Square | "
    print second_trip.join(" ")
    print "Total of #{ trip.length + second_trip.length - 1 } stops"
  end
end

travel( :n, "34th", :"6", "Astor Place" )
